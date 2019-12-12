<template>
  <div class="home" v-if="batmanShows !== null">
    <div v-for="each in batmanShows.data" :key="each.id">
      <router-link :to="{ name: 'batman', params: { id: each.show.id } }">
        <img :src="each.show.image.medium" />
      </router-link>
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
      source: "https://api.tvmaze.com/search/shows?q=batman"
    };
  },
  computed: mapState(["batmanShows"]),
  methods: {
    ...mapActions(["getBatmanShows"])
  },
  mounted() {
    this.$store.dispatch("getBatmanShows", { source: this.source });
  }
};
</script>
