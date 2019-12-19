<template lang="html">
  <div class="shows">
    <InputSearch></InputSearch>
    <DraggableElement
      v-bind:start-item="startItem"
      v-bind:end-item="endItem"
      v-on:next-page="nextPage"
      v-on:previous-page="previousPage"
    ></DraggableElement>
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
import InputSearch from "./InputSearch";
import DraggableElement from "./DraggableElement";

export default {
  name: "shows",
  components: {
    InputSearch,
    DraggableElement
  },
  data() {
    return {
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
  // mounted() {
  //   this.getShows({ source: this.source + this.initialSearchQuery });
  // }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 0;
}
.shows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
// .container {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: flex-start;
//   flex-wrap: wrap;
// }
// .show-container {
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
//
// img.img-box,
// p.img-box {
//   box-shadow: 6px 6px 3px grey;
// }
//
// p.img-box {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   background-color: lightgrey;
//   width: 204px;
//   height: 284px;
// }
//
// a {
//   color: darkgrey;
//   text-decoration: none;
// }
//
// a:default {
//   color: darkgrey;
//   text-decoration: none;
// }
// a:link {
//   color: darkgrey;
//   color: none;
// }

.input-box {
  margin: 1rem;
  border-radius: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: 1px 1px 10px #3498db;
}
</style>
