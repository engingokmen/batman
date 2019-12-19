<template lang="html">
  <div class="container" v-if="getTwo(startItem, endItem) !== null">
    <div
      class="show-container"
      v-for="each in getTwo(startItem, endItem)"
      :key="each.show.id"
    >
      <router-link :to="{ name: 'showSummary', params: { id: each.show.id } }">
        <p class="img-box" v-if="each.show.image === null">
          NO IMAGE
        </p>
        <img class="img-box" v-else :src="each.show.image.medium" />
      </router-link>
      <span>{{ each.show.name }}</span>
    </div>
  </div>
  <div v-else>
    DATA LOADING ...
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "shows",
  components: {},
  props: ["startItem", "endItem"],
  data() {
    return {
      initialSearchQuery: "batman",
      source: "https://api.tvmaze.com/search/shows?q=",
    };
  },
  computed: {
    ...mapGetters(["getTwo"])
  },
  methods: {
    ...mapActions(["getShows"])
  },
  mounted() {
    this.getShows({ source: this.source + this.initialSearchQuery });
  }
};
</script>

<style lang="css" scoped>
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

img.img-box,
p.img-box {
  box-shadow: 6px 6px 3px grey;
}

p.img-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: lightgrey;
  width: 204px;
  height: 284px;
}

a {
  color: darkgrey;
  text-decoration: none;
}

a:default {
  color: darkgrey;
  text-decoration: none;
}
a:link {
  color: darkgrey;
  color: none;
}
</style>
