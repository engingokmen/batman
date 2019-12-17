import { createApp } from './app';

export default context =>
  new Promise((resolve, reject) => {
    // Vue instance creates on every request
    const { app, router, store } = createApp();

    // $meta - method, was added in Vue instance by package vue-meta
    const meta = app.$meta();

    // push current url to router
    router.push(context.url);

    // assign meta to context to have the ability to render it in template
    context.meta = meta;

    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      context.rendered = () => {
        // assign state to context, it’ll we render in template as window.__INITIAL_STATE__
        context.state = store.state;
      };

      const matchedComponents = router.getMatchedComponents();
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        return reject(new Error(404));
      }

      // the Promise should resolve to the app instance so it can be rendered
      return resolve(app);
    }, reject);
  });
