<template>
  <div class="filme-container">
    <div class="capa-filme-detalhes">
      <img :src="movie.Poster" alt="" />
    </div>
    <div class="detalhes-filme">
      <h3 class="titulo">{{ movie.Title }} - <span>{{ movie.Year }}</span></h3>
      <p>Box Office: <span>{{ movie.BoxOffice }}</span></p>
      <p>Director: <span>{{ movie.Director }}</span></p>
      <p>Production: <span>{{ movie.Production }}</span></p>
      <p class="rating">{{ movie.imdbRating }}</p>
      <p>{{ movie.Plot }}</p>
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

<style lang="scss" scoped>
.filme-container {
    background-color: #1A1820;
    padding: 20px;
    text-align: left;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 880px;
    display: flex;
        
    .titulo {
      color: #ffffff;
      font-size: 25px;
      margin: 0;
      padding: 0;
    }

    .capa-filme-detalhes {
      margin-right: 20px;
      img {
        border-radius: 10px;
      }
    }
    .rating {
      color: #ffd400;
      font-weight: bold;
    }
    p {
      color: #ffffff;
      margin-bottom: 5px;
    }
    span {
      color: #828282;
    }

    .detalhes-filme {
      width: 400px;
      flex-direction: column;
      display: flex;
    }
}
</style>