<template>
  <div class="header-container">
    <router-link to="/" class="logo hvr-pulse-grow">{{ title }}</router-link>
    <search-input></search-input>
  </div>
</template>

<script>
  import Search from './common/Search';
  export default {
    props: {
      title: {
        type: String,
        default: 'Muve'
      }
    },
    components: {
      'search-input': Search
    }
  }
</script>

<style lang="scss" scoped>
  .header-container {
    display: flex;
    justify-content: space-around;
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

    @-webkit-keyframes hvr-pulse-grow {
      to {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    @keyframes hvr-pulse-grow {
      to {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    .hvr-pulse-grow {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    .hvr-pulse-grow:hover {
      -webkit-animation-name: hvr-pulse-grow;
      animation-name: hvr-pulse-grow;
      -webkit-animation-duration: 0.3s;
      animation-duration: 0.3s;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
    }
  }
</style>