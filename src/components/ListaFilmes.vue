<template>
  <div class="filmes-container">
    <h4 class="titulo">Filmes que você talvez goste</h4>
    <div class="container-lista">
      <ul class="lista-filmes" v-for="(filme, index) in filmes" :key="index">
        <ItemFilmes :filme = "filme"/>
      </ul>
    </div>
  </div>
</template>

<script>
  import ItemFilmes from './ItemFilmes.vue';
  export default {
    props: ['filmeBusca'],
    data() {
      return {
        filmes: [
          {
            "Title": "Guardians of the Galaxy",
            "Year": "2014",
            "imdbID": "tt2015381",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"
          },
          {
            "Title": "Indiana Jones and the Kingdom of the Crystal Skull",
            "Year": "2008",
            "imdbID": "tt0367882",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTIxNDUxNzcyMl5BMl5BanBnXkFtZTcwNTgwOTI3MQ@@._V1_SX300.jpg"
          },
          {
            "Title": "Avatar",
            "Year": "2009",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
          },
          {
            "Title": "Van Helsing",
            "Year": "2004",
            "imdbID": "tt0338526",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODRmY2NhNDItOWViNi00OTIyLTk3YjYtYzY0YTFlMDg1YzQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          }
        ],
      }
    },
    components: {
      ItemFilmes
    },
    watch: {
      filmeBusca () {
        return this.filmes = this.filmeBusca;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filmes-container {
    background-color: #1A1820;
    padding: 20px;
    text-align: left;
    border-radius: 15px;
    margin-top: 30px;
    
    .titulo {
      color: #ffffff;
      font-size: 25px;
      margin: 0;
      padding: 0;
    }

    .container-lista {
      display: flex;
      flex-wrap: wrap;
    }

    .lista-filmes {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }
  }
</style>