<template>
  <div class="search-bar">
    <input 
      v-model="searchTitle"
      @keyup.enter="searchMovie"
      type="text"
      :placeholder="searchPlaceholder"
      :style="{ width: widthInput }">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTitle: ''
      }
    },
    props: {
      widthInput: {
        type: String,
        default: 'auto'
      },
      searchPlaceholder: {
        type: String,
        default: 'Search...'
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
  .search-bar {
    input {
      padding: 10px;
      border-radius: 15px;
      border: none;
      min-width: 450px;
    }
  }
</style>