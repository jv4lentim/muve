<template>
  <div class="loading-container" v-if="isLoading">
    <Loading />
  </div>
  <div class="filme-container" v-else>
    <div class="movie-info">
      <div class="capa-filme-detalhes">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div class="detalhes-filme">
        <h3 class="titulo">{{ movie.Title }} - <span>{{ movie.Year }}</span></h3>
        <p>Released: <span>{{ movie.Released }}</span></p>
        <p>Box Office: <span>{{ movie.BoxOffice }}</span></p>
        <p>Director: <span>{{ movie.Director }}</span></p>
        <p>Production: <span>{{ movie.Production }}</span></p>
        <p>Genre: <span>{{ movie.Genre }}</span></p>
        <p>Actors: <span>{{ movie.Actors }}</span></p>
        <p class="rating">{{ movie.imdbRating }}</p>
        <p>{{ movie.Plot }}</p>
      </div>
    </div>
    <Message
      :mainMessage="'This movie is pretty awesome!'"
      :subMessage="'What about trying to know more about another one?'"
      :image="'pipoca'" />
    <Search :widthInput="'100%'" :searchPlaceholder="'Search for an amazing movie'" />
  </div>
</template>

<script>
  import Loading from './common/Loading';
  import Search from './common/Search';
  import Message from './common/Message';
  import { fetchInfo } from '../repository/api';
  export default {
    data() {
      return {
        movie: [],
        isLoading: true
      }
    },
    components: {
      Loading,
      Search,
      Message
    },
    beforeMount () {
      this.fetchMovieInfo()
    },
    methods: {
      async fetchMovieInfo() {
        this.movie = await fetchInfo(this.$route.params.id);
        this.isLoading = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .movie-info {
    padding: 20px;
    text-align: left;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 880px;
    display: flex;
    align-items: center;
        
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
        transition: transform .2s;
      }
      img:hover {
        transform: scale(0.9);
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

  .loading-container {
    margin: 0 auto;
  }
</style>