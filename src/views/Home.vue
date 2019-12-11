<template>
  <div class="home">
    <router-link :to="{ name: 'batman', params: {id:info.data[0]['show']['id']} }">LINK</router-link>
    <!-- {{info.data[0]['show']['image']['medium']}} -->
    <!-- {{info.data[0]['show']['id']}} -->

    <!-- {{ info.data }} -->
    <!-- {{arrayOfImages}} -->
    <div v-for="each in info.data" :key="each.id">
      <!-- <p> -->
        <!-- {{each["show"]["id"]}} -->
        <!-- {{each["show"]["image"]["medium"]}} -->
      <!-- </p> -->
      <router-link :to="{ name:'batman', params: {id:each.show.id}}"><img :src="each.show.image.medium" /></router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {
      source: "http://api.tvmaze.com/search/shows?q=batman",
      info: null,
      arrayOfImages: []
    };
  },
  mounted() {
    axios.get(this.source)
      .then(response => (this.info = response))
      .then(this.imagesToArray);

  },
  filters: {},
  computed: {},
  methods: {
    imagesToArray: function() {
      for (const element of this.info.data) {
        this.arrayOfImages.push(element["show"]["image"]["medium"]);
      }
    }
  }
};
</script>
