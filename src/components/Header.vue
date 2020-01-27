<template>
  <div class="header-container">
    <h2 class="logo">Muve</h2>
    <div class="search-bar">
      <input v-model="filmeBusca" @keyup.enter="fetchFilmeBusca" type="text" placeholder="Pesquise por um filme">
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        filmeBusca: ''
      }
    },
    methods: {
      fetchFilmeBusca () {
        axios.get("http://www.omdbapi.com/", { s: this.filmeBusca, apikey: '8a73c412' })
        .then((response) => {
          this.$emit('buscarFilme', response.data);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .logo {
      color: #ffffff;
      font-size: 31px;
      font-weight: bold;
    }

    .search-bar {
      input {
        padding: 10px;
        border-radius: 15px;
        border: none;
      }
    }
  }
</style>