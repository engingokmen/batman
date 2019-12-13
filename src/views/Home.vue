<template>
  <div class="home" v-if="batmanShows !== null">
    <input
      class="input-box"
      v-model="inputSearch"
      placeholder="SEARCH FOR TV SHOWS"
    />
    <button v-on:click="getShows">Search</button>
    <div class="container">
      <div
        class="show-container"
        v-for="each in batmanShows.data"
        :key="each.id"
      >
        <router-link :to="{ name: 'summary', params: { id: each.show.id } }">
          <img :src="each.show.image.medium" />
        </router-link>
        <span>{{ each.show.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      inputSearch: "batman",
      source: "https://api.tvmaze.com/search/shows?q="
    };
  },
  computed: mapState(["batmanShows"]),
  methods: {
    ...mapActions(["getBatmanShows"]),
    getShows() {
      this.getBatmanShows({ source: this.source + this.inputSearch });
    }
  },
  mounted() {
    this.getBatmanShows({ source: this.source + this.inputSearch });
  }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 0;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.show-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.show-container img {
  box-shadow: 6px 6px 3px grey;
}
.input-box {
  margin: 1rem;
  border-radius: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: 1px 1px 10px #3498db;
}
</style>
