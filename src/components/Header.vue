<template>
  <div class="header-container">
    <h2 class="logo">Muve</h2>
    <div class="search-bar">
      <input type="text" placeholder="Pesquise por um filme" >
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .logo {
      color: #ffffff;
      font-size: 31px;
      font-weight: bold;
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