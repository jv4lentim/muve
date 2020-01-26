<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

body {
  background-color: #0F1014;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 900px;
  margin: 0 auto;
}
</style>
