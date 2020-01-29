<template>
  <div class="header-container">
    <router-link to="/" class="logo">Muvie</router-link>
    <div class="search-bar">
      <input v-model="searchTitle" @keyup.enter="searchMovie" type="text" placeholder="Search...">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTitle: ''
      }
    },
    methods: {
      searchMovie () {
        if (this.searchTitle != '') {
          this.$router.push({ path: `/movies/${this.searchTitle}`});
          this.searchTitle = '';
        }
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
      color: #FFEE00;
      font-size: 31px;
      font-weight: bold;
      text-decoration: none;
      margin-left: 20px;
      margin-right: 30px;
    }

    .search-bar {
      input {
        padding: 10px;
        border-radius: 15px;
        border: none;
        margin-right: 30px;
        min-width: 450px;
      }
    }
  }
</style>