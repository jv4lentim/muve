<template>
  <div class="filmes-container">
    <Message />
    <h4 class="titulo">Movies you got to watch</h4>
    <div name="loading-container" v-if="isLoading">
      <Loading />
    </div>
    <div name="container-list" v-else>
      <ul class="lista-filmes">
        <MovieItem 
          :movie = "movie"
          v-for="(movie, index) in movies"
          :key="index"/>
      </ul>
    </div>
  </div>
</template>

<script>
  import MovieItem from './MovieItem';
  import Message from './common/Message';
  import Loading from './common/Loading';
  import { RANDOM_MOVIES } from '../data/movie';
  import { fetchMovies }from '../repository/api';
  export default {
    data() {
      return {
        movies: '',
        randomMovies: RANDOM_MOVIES,
        isLoading: true
      }
    },
    components: {
      MovieItem,
      Message,
      Loading
    },
    beforeMount() {
      this.fetchMoviesNoResult();
    },
    methods: {
      async fetchMoviesNoResult() {
        this.movies = await fetchMovies(this.randomMovies[Math.floor(Math.random() * this.randomMovies.length)]);
        this.isLoading = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filmes-container {
    text-align: left;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .titulo {
      color: #ffffff;
      font-size: 16pt;
      text-align: center;
      margin-top: 15px;
      padding: 0;
    }
    .lista-filmes {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>