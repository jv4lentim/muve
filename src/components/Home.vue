<template>
  <div class="filmes-container">
    <Message />
    <h4 class="titulo">Movies you got to watch</h4>
    <div class="container-lista">
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
  import { MOVIES } from '../data/movie';
  export default {
    data() {
      return {
        movies: MOVIES
      }
    },
    components: {
      MovieItem,
      Message
    },
  }
</script>

<style lang="scss" scoped>

  .filmes-container {
    padding: 20px;
    text-align: left;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    
    .titulo {
      color: #ffffff;
      font-size: 16pt;
      text-align: center;
      margin-top: 35px;
      padding: 0;
    }

    .container-lista {
      display: flex;
      flex-wrap: wrap;
    }

    .lista-filmes {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      padding: 0;
    }
  }
</style>