import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    batmanShows: null,
    summary: null
  },
  getters: {},
  mutations: {
    fillBatmanShows(state, { response }) {
      state.batmanShows = response;
    },
    fillShowSummary(state, { response }) {
      state.summary = response;
    }
  },
  actions: {
    getBatmanShows({ commit }, { source }) {
      axios
        .get(source)
        .then(response => commit("fillBatmanShows", { response }));
    },
    getShowSummary({ commit }, { source }) {
      axios
        .get(source)
        .then(response => commit("fillShowSummary", { response }));
    }
  }
});
