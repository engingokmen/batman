<template lang="html">
  <div id="debounce-search-demo">
    <input v-model="searchQuery" placeholder="Type something" />
    <strong>{{ searchIndicator }}</strong>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";
export default {
  data: function() {
    return {
      searchQuery: "",
      source: "https://api.tvmaze.com/search/shows?q=",
      searchQueryIsDirty: false,
      isCalculating: false
    };
  },
  computed: {
    searchIndicator: function() {
      if (this.isCalculating) {
        return "⟳ Fetching new results";
      } else if (this.searchQueryIsDirty) {
        return "... Typing";
      } else {
        return "✓ Done";
      }
    }
  },
  watch: {
    searchQuery: function() {
      this.searchQueryIsDirty = true;
      this.expensiveOperation();
    }
  },
  methods: {
    // This is where the debounce actually belongs.
    expensiveOperation: _.debounce(function() {
      this.isCalculating = true;
      setTimeout(
        function() {
          this.getShows({ source: this.source + this.searchQuery });
          this.isCalculating = false;
          this.searchQueryIsDirty = false;
        }.bind(this),
        1000
      );
    }, 500),
    ...mapActions(["getShows"])
  }
};
</script>

<style lang="css" scoped></style>
