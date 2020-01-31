<template>
  <div class="container-app">
    <div id="app">
      <Header/>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  data() {
    return {
      filmeBusca: ''
    }
  },
  components: {
    Header,
  },
  watch: {
    filmeBusca () {
      this.$router.push({ path: '/lista-filmes', query: { busca: this.filmeBusca } })
    }
  }
}
</script>

<style>

html, body {
  background: url('./assets/images/avengers.png') no-repeat center center fixed; 
  background-color:rgba(15, 16, 20, 1);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
}

.container-app {
  display: flex;
}
</style>
