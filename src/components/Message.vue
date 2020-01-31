<template>
  <div class="message-container">
    <div class="message-info">
      <h4>Discover more about stories you love</h4>
      <p>Try starting to search for the first movie that comes to your mind</p>
    </div>
    <img src="../assets/images/cadeira.png" alt="" />
  </div>
</template>

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