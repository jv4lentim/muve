<template>
  <div class="container-item" @click="fetchMovie">
    <div class="capa-filme">
      <img :src="movie.Poster" alt="">
    </div>
    <h3>{{ movie.Title }}</h3>
    <p>{{ movie.imdbRating }}</p>
  </div>
</template>

<script>
  export default {
    props: ['movie'],
    methods: {
      fetchMovie () {
        this.$router.push({ path: `/movie/${this.movie.imdbID}`});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-item {
    margin: 10px;
    width: 200px;
    transition: transform .2s;
    text-align: center;

    .capa-filme {
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    h3 {
      color: #ffffff;
      width: 200px;
      font-size: 15px;
    }
    p {
      font-size: 15px;
      color: #FFEE00;
    }
  }

  .container-item:hover {
    transform: scale(1.1);
  }
</style>