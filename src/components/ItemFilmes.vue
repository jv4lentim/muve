<template>
  <div class="container-item" @click="fetchDadosFilme">
    <div class="capa-filme">
      <img :src="filme.Poster" alt="">
    </div>
    <h3>{{ filme.Title }}</h3>
    <p>{{ filme.imdbRating }}</p>
  </div>
</template>

<script>
  export default {
    props: ['filme'],
    methods: {
      fetchDadosFilme () {
        this.$router.push({ path: '/movie', query: { id: this.filme.imdbID } })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-item {
    margin: 10px;
    width: 200px;
    .capa-filme {
      img {
        width: 100%;
      }
    }
    h3 {
      color: #ffffff;
      width: 200px;
      font-size: 18px;
    }
    p {
      font-size: 15px;
      color: #FFEE00;
    }
  }
</style>