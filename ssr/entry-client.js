import { createApp } from './app';

const { app, router, store } = createApp();

router.onReady(() => {
   // replacing store from server
  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
  }

  app.$mount('#app');
});

// it activates HMR and executes then webpack-dev-server will be run with hot property
if (module.hot) {
  const api = require('vue-hot-reload-api');
  const Vue = require('vue');

  api.install(Vue);
  if (!api.compatible) {
    throw new Error(
      'vue-hot-reload-api is not compatible with the version of Vue you are using.',
    );
  }

  module.hot.accept();
}
