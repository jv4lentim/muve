<template>
  <div class="header-container">
    <router-link to="/" class="logo">Muve</router-link>
    <div class="search-bar">
      <input v-model="filmeBusca" @keyup.enter="fetchFilmeBusca" type="text" placeholder="Pesquise por um filme">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filmeBusca: ''
      }
    },
    methods: {
      fetchFilmeBusca () {
        this.$emit('buscarFilme', this.filmeBusca);
        this.filmeBusca = '';
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
    margin-top: 20px;

    .logo {
      color: #ffffff;
      font-size: 31px;
      font-weight: bold;
      text-decoration: none;
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