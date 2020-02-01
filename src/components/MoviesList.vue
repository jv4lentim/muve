<template>
  <div class="loading-container" v-if="isLoading">
    <loading-svg></loading-svg>
  </div>
  <div class="filmes-container" v-else>
    <div v-if="noResult">
      <Message :mainMessage="'Ooops! We could not find that movie :('" :subMessage="'What about these here?'" :image="''" />
      <div class="loading-container" v-if="noResultLoading">
        <loading-svg></loading-svg>
      </div>
      <ul class="lista-filmes" v-else>
        <MovieItem 
          :movie = "movie"
          v-for="(movie, index) in movies"
          :key="index"/>
      </ul>
    </div>
    <div class="container-lista" v-else>
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
  import { fetchMovies }from '../repository/api';

  export default {
    data() {
      return {
        movies: [],
        searchTerm: this.$route.params.search,
        isLoading: true,
        noResult: false,
        noResultLoading: true,
        moviesListNoResult: ['spider', 'lord of the rings', 'harry potter', 'the hobbit', 'avengers', 'star wars']
      }
    },
    components: {
      MovieItem,
      Message,
      'loading-svg': Loading
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
  .filmes-container {
    text-align: left;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 20px;
    
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

    .searchTerm {
      font-weight: bold;
      color: grey;
    }

    .loading {
      width: 100px;
    }
  }

  .loading-container {
    margin: 0 auto;
  }


</style>