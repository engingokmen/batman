<template>
  <div class="summary" v-if="summary !== null">
    <h1>SUMMARY OF</h1>
    <img class="summary-image" :src="summary.data.image.original" />
    <div class="summary-container">
      <ul>
        <strong>Genres:</strong>
        <li v-for="genre in summary.data.genres" :key="genre.id">
          {{ genre }}
        </li>
      </ul>
      <p><strong>Premiered:</strong> {{ summary.data.premiered }}</p>
      <p><strong>Rating:</strong> {{ summary.data.rating.average }} Average</p>
      <strong>Summary:</strong>
      <p class="summary-text-container" v-html="summary.data.summary"></p>
    </div>
  </div>
  <div v-else>
    DATA LOADING ...
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "showSummary",
  props: ["id"],
  data() {
    return {
      source: "https://api.tvmaze.com/shows/"
    };
  },
  computed: mapState(["summary"]),
  methods: {
    ...mapActions(["getSummary"])
  },
  mounted() {
    this.getSummary({ source: this.source + this.id });
  }
};
</script>

<style lang="scss" scoped>
.summary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.summary-container {
  width: calc(100vw * 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.summary-image {
  height: 500px;
}
ul {
  margin-top: 2rem;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li {
  margin: 0;
  padding: 0 0.3rem;
}
.summary-text-container {
  text-align: left;
}
</style>
