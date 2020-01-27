<template>
  <div class="filme-container">
    <div class="capa-filme-detalhes">
      <img :src="movie.Poster" alt="" />
    </div>
    <div class="detalhes-filme">
      <h3>{{ movie.Title }}</h3>
      <p>{{ movie.BoxOffice }}</p>
      <p>{{ movie.Production }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        movie: []
      }
    },
    beforeMount () {
      this.fetchMovieInfo(this.$route.query.id);
    },
    methods: {
      fetchMovieInfo (id) {
        axios.get("http://www.omdbapi.com/", { params: { i: id, apikey: '8a73c412' }})
          .then((response) => {
            return this.movie = response.data;
          })
      }
    }
  }
</script>