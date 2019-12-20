<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"
        >LIST OF
        <span>
          <svg
            fill="none"
            height="64"
            viewBox="0 0 94 64"
            width="94"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path d="m0 0h94v64h-94z" />
            <g clip-path="url(#a)">
              <path
                class="draw-me"
                d="m0 0h37m0 0v64m0-64 29.2566 63 27.7434-63"
                stroke-width="1px"
                stroke="red"
              />
            </g>
          </svg>
        </span>
        SHOWS
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  mounted() {
    anime({
      targets: '.draw-me',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
