<template>
  <div class="loading-container" v-if="isLoading">
    <Loading />
  </div>
  <div class="list-container" v-else>
    <div name="container-noresult" v-if="noResult">
      <Message 
        :mainMessage="'Ooops! We could not find this movie :('"
        :subMessage="'What about these here?'"
        :image="'claquete'" />
      <div class="loading-container" v-if="noResultLoading">
        <Loading />
      </div>
      <ul class="lista-filmes" v-else>
        <MovieItem 
          :movie = "movie"
          v-for="(movie, index) in movies"
          :key="index"/>
      </ul>
    </div>
    <div name="container-lista" v-else>
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
        movies: [],
        searchTerm: this.$route.params.search,
        isLoading: true,
        noResult: false,
        noResultLoading: true,
        moviesListNoResult: RANDOM_MOVIES
      }
    },
    components: {
      MovieItem,
      Message,
      Loading
    },
    beforeMount () {
      this.fetchMoviesList();
    },
    watch: {
      $route (to) {
        this.isLoading = true;
        this.searchTerm = to.params.search;
        this.fetchMoviesList();
      }
    },
    methods: {
      async fetchMoviesNoResult() {
        this.movies = await fetchMovies(this.moviesListNoResult[Math.floor(Math.random() * this.moviesListNoResult.length)]);
        this.noResultLoading = false;
      },
      async fetchMoviesList() {
        this.movies = await fetchMovies(this.searchTerm);
        this.noResult = false;
        this.isLoading = false;
        if (this.movies == null) {
          this.noResult = true;
          this.fetchMoviesNoResult();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-container {
    text-align: left;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    .titulo {
      color: white;
      font-size: 25px;
      padding: 0;
    }
    .lista-filmes {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      padding: 0;
    }
    .loading {
      width: 100px;
    }
  }
  .loading-container {
    margin: 0 auto;
  }
</style>