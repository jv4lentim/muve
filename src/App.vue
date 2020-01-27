<template>
  <div class="container-app">
    <div id="app">
      <Header @buscarFilme = "filmeBusca = $event"/>
      <div class="container">
        <ListaGeneros />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import ListaGeneros from './components/ListaGeneros';

export default {
  name: 'app',
  data() {
    return {
      filmeBusca: ''
    }
  },
  components: {
    Header,
    ListaGeneros
  },
  watch: {
    filmeBusca () {
      this.$router.push({ path: '/lista-filmes', query: { busca: this.filmeBusca } })
    }
  }
}
</script>

<style>

body {
  background-color: #0F1014;
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
