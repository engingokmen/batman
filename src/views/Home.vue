<template>
  <div class="home">
    <InputSearch></InputSearch>
    <div class="container" v-if="getTwo(startItem, endItem) !== null">
      <div
        class="show-container"
        v-for="each in getTwo(startItem, endItem)"
        :key="each.show.id"
      >
        <router-link
          :to="{ name: 'showSummary', params: { id: each.show.id } }"
        >
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
    <p><strong>Page: </strong>{{ pageNum }} of {{ numberOfPages }}</p>
    <button
      v-show="getTwo(startItem, endItem).length > 0"
      v-on:click="nextPage"
    >
      <span>Next Page</span>
    </button>
    <button v-show="startItem > 0" v-on:click="previousPage">
      <span>Previous Page</span>
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
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
      source: "https://api.tvmaze.com/search/shows?q=",
      pageNum: 0,
      startItem: 0,
      endItem: 2
    };
  },
  computed: {
    ...mapGetters(["getTwo"]),
    ...mapState(["shows"]),
    numberOfPages() {
      return Math.ceil(this.shows.length / (this.endItem - this.startItem));
    }
  },
  methods: {
    ...mapActions(["getShows"]),
    nextPage() {
      this.pageNum++;
      this.startItem = this.pageNum * 2;
      this.endItem = this.pageNum * 2 + 2;
    },
    previousPage() {
      if (this.pageNum > 0) {
        this.pageNum--;
        this.startItem = this.pageNum * 2;
        this.endItem = this.pageNum * 2 + 2;
      }
    }
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

.input-box {
  margin: 1rem;
  border-radius: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: 1px 1px 10px #3498db;
}
</style>
