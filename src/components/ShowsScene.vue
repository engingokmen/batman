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
    <div class="buttons">
      <button class="text-buttons" v-on:click="previousPage">
        <span>Previous Page</span>
      </button>
      <button
        class="number-buttons"
        v-for="num of numberOfPages"
        v-bind:key="num.id"
        v-on:click="gotoPage(num)"
      >
        {{ num }}
      </button>
      <button class="text-buttons" v-on:click="nextPage">
        <span>Next Page</span>
      </button>
    </div>
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
      pageNum: 1,
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
      if (this.pageNum < this.numberOfPages) {
        this.pageNum++;
        this.startItem = this.pageNum * 2 - 2;
        this.endItem = this.pageNum * 2;
      }
    },
    previousPage() {
      if (this.pageNum > 1) {
        this.pageNum--;
        this.startItem = this.pageNum * 2 - 2;
        this.endItem = this.pageNum * 2;
      }
    },
    gotoPage(num) {
      this.pageNum = num;
      this.startItem = this.pageNum * 2 - 2;
      this.endItem = this.pageNum * 2;
    }
  }
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

// @media screen and (max-width: 600px) {
//   .shows {
//     overflow-y: scroll; /* has to be scroll, not auto */
//     -webkit-overflow-scrolling: touch;
//   }
// }

.input-box {
  margin: 1rem;
  border-radius: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: 1px 1px 10px #3498db;
}

.buttons button {
  border-radius: 4px;
  text-align: center;
  margin: 1px;
  height: 50px;
}

.buttons button:hover {
  background-color: #42b983;
}
.buttons .number-buttons {
  width: 40px;
}

.buttons .text-buttons {
  width: 100px;
}

@media screen and (max-width: 600px) {
  .buttons {
    display: none;
  }
}
</style>
