<template>
  <div class="home" v-if="shows !== null">
    <InputSearch></InputSearch>
    <div class="container">
      <div class="show-container" v-for="each in shows.data" :key="each.id">
        <router-link :to="{ name: 'showSummary', params: { id: each.show.id } }">
          <img :src="each.show.image.medium" />
        </router-link>
        <span>{{ each.show.name }}</span>
      </div>
    </div>
  </div>
  <div v-else>
    DATA LOADING ...
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InputSearch from "../components/InputSearch";
// @ is an alias to /src
export default {
  name: "home",
  components: {
    InputSearch
  },
  data() {
    return {
      initialSearchQuery: "batman",
      source: "https://api.tvmaze.com/search/shows?q="
    };
  },
  computed: mapState(["shows"]),
  methods: {
    ...mapActions(["getShows"])
  },
  mounted() {
    this.getShows({ source: this.source + this.initialSearchQuery });
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
