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
import axios from "axios";

export default {
  name: "batman",
  props: ["id"],
  data() {
    return {
      summary: null
    };
  },
  mounted() {
    axios
      .get("https://api.tvmaze.com/shows/" + this.id)
      .then(response => (this.summary = response));
  }
};
</script>
