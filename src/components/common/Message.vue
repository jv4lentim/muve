<template>
  <div class="message-container">
    <div class="message-info">
      <h4>{{ mainMessage }}</h4>
      <p>{{ subMessage }}</p>
    </div>
    <img :src="getImgUrl(image)" alt="" />
  </div>
</template>

<script>
  export default {
    props: {
      mainMessage: {
        type: String,
        default: 'Discover more about stories you love'
      },
      subMessage: {
        type: String,
        default: 'Try starting to search for the first movie that comes to your mind'
      },
      image: {
        type: String,
        default: 'cadeira'
      }
    },
    methods: {
      getImgUrl(img) {
        try {
          var images = require.context('../../assets/images', false, /\.png$/);
          return images('./' + img + ".png");
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .message-container {
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(155, 155, 155, 0.1);
    border-radius: 5px;
    box-shadow: 1px 1px 1px black;
    max-width: 1112px;
    width: 100%;
    
    h4 {
      color: #ffffff;
      font-size: 20pt;
      font-weight: bold;
    }

    p {
      color: #fefefe;
      font-size: 12pt;
    }

    img {
      width: 50px;
    }

    .message-info {
      display: flex;
      flex-direction: column;
    }
  }
</style>