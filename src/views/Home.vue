<template>
  <div class="home" v-if="info !== null">
    <div v-for="each in info.data" :key="each.id">
      <router-link :to="{ name: 'batman', params: { id: each.show.id } }">
        <img :src="each.show.image.medium" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      source: "https://api.tvmaze.com/search/shows?q=batman",
      info: null
    };
  },
  mounted() {
    axios.get(this.source).then(response => (this.info = response));
  },
};
</script>
