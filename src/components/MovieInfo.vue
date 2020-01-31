<template>
  <div class="loading-container" v-if="isLoading">
    <div class="loading">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(0 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.5623721881390592s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(30 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.5112474437627811s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(60 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.460122699386503s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(90 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.4089979550102249s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(120 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.3578732106339468s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(150 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.30674846625766866s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(180 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.25562372188139054s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(210 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.20449897750511245s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(240 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.15337423312883433s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(270 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.10224948875255623s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(300 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="-0.05112474437627811s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(330 50 50)">
          <rect x="48" y="24" rx="2" ry="2.64" width="4" height="12" fill="#ffffff">
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.6134969325153374s" begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g>
      </svg>
    </div>
  </div>
  <div class="filme-container" v-else>
    <div class="movie-info">
      <div class="capa-filme-detalhes">
        <img :src="movie.Poster" alt="" />
      </div>
      <div class="detalhes-filme">
        <h3 class="titulo">{{ movie.Title }} - <span>{{ movie.Year }}</span></h3>
        <p>Box Office: <span>{{ movie.BoxOffice }}</span></p>
        <p>Director: <span>{{ movie.Director }}</span></p>
        <p>Production: <span>{{ movie.Production }}</span></p>
        <p class="rating">{{ movie.imdbRating }}</p>
        <p>{{ movie.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        movie: [],
        isLoading: true
      }
    },
    component: {
    },
    beforeMount () {
      this.fetchInfo(this.$route.params.id);
    },
    methods: {
      fetchInfo (id) {
        axios.get("http://www.omdbapi.com/", { params: { i: id, apikey: '8a73c412' }})
          .then((response) => {
            this.isLoading = false;
            return this.movie = response.data;
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .movie-info {
    padding: 20px;
    text-align: left;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 880px;
    display: flex;
        
    .titulo {
      color: #ffffff;
      font-size: 25px;
      margin: 0;
      padding: 0;
    }

    .capa-filme-detalhes {
      margin-right: 20px;
      img {
        border-radius: 10px;
        transition: transform .2s;
      }
      img:hover {
        transform: scale(0.9);
      }
    }
    .rating {
      color: #ffd400;
      font-weight: bold;
    }
    p {
      color: #ffffff;
      margin-bottom: 5px;
    }
    span {
      color: #828282;
    }

    .detalhes-filme {
      width: 400px;
      flex-direction: column;
      display: flex;
    }
  }

  .loading-container {
    margin: 0 auto;
  }
</style>