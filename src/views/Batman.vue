<template>
  <div class="batman" v-if="summary !== null">
    <h1>SUMMARY OF </h1>
    <img :src="summary.data.image.original" />
    <div class="summary-container">
      <ul>
        <strong>Genres:</strong>
        <li v-for="genre in summary.data.genres" :key="genre.id">
          {{ genre }}
        </li>
      </ul>
      <p><strong>Premiered:</strong> {{ summary.data.premiered }}</p>
      <p><strong>Rating:</strong> {{ summary.data.rating.average }} Average</p>
      <strong>Summary:</strong><p class="summary" v-html="summary.data.summary"></p>
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

<style lang="scss" scoped>
  .batman {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .summary-container {
    width:66%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  ul {
    margin-top: 2rem;
    padding:0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  li {
    margin: 0;
    padding:0 0.3rem;
  }
  .summary {
    text-align: left;
  }
</style>
