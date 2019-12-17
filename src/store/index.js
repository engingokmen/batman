import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputSearch: "batman",
    shows: [],
    summary: null
  },
  getters: {
    getTwo: state => (i, j) => {
      return state.shows.slice(i, j);
    }
  },
  mutations: {
    fillShows(state, { response }) {
      state.shows = response.data;
    },
    fillSummary(state, { response }) {
      state.summary = response;
    }
  },
  actions: {
    getShows({ commit }, { source }) {
      axios.get(source).then(response => {
        commit("fillShows", { response });
      });
    },
    getSummary({ commit }, { source }) {
      axios.get(source).then(response => commit("fillSummary", { response }));
    }
  }
});
