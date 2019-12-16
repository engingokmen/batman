import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputSearch: "batman",
    shows: null,
    summary: null
  },
  getters: {},
  mutations: {
    fillShows(state, { response }) {
      if (response === null) {
        return;
      } else {
        state.shows = response;
      }
    },
    fillSummary(state, { response }) {
      state.summary = response;
    }
  },
  actions: {
    getShows({ commit }, { source }) {
      axios.get(source).then(response => commit("fillShows", { response }));
    },
    getSummary({ commit }, { source }) {
      axios.get(source).then(response => commit("fillSummary", { response }));
    }
  }
});
