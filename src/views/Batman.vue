<template>
  <div class="batman" v-if="summary !== null">
    <h1>SUMMARY</h1>
    <div>
      <img :src="summary.data.image.original" />
      <p>
        Genres
      </p>
      <ul v-for="genre in summary.data.genres" :key="genre.id">
        <li>
          {{ genre }}
        </li>
      </ul>
      <p>Premiered: {{ summary.data.premiered }}</p>
      <p>Rating: Average {{ summary.data.rating.average }}</p>
      <p v-html="summary.data.summary"></p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "batman",
  props: ["id"],
  data() {
    return {
      source: "https://api.tvmaze.com/shows/"
    };
  },
  computed: mapState(["summary"]),
  methods: {
    ...mapActions(["getShowSummary"])
  },
  mounted() {
    this.$store.dispatch("getShowSummary", {source: this.source+this.id})
  }
};
</script>

<style lang="scss">
$color: red;
</style>
