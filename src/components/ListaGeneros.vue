<template>
  <div class="aside-container">
    <ul class="lista-generos">
      <li class="titulo">Gêneros</li>
      <li>Ação</li>
      <li>Suspense</li>
      <li>Terror</li>
      <li>Drama</li>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .aside-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    padding: 0;
    margin-right: 50px;

    .titulo {
      font-size: 21px;
      font-weight: bold;
      color: #ffffff;
    }
    .lista-generos {
      list-style: none;
      text-align: left;
      padding: 0;
      margin: 0;
      .titulo {
        color: #ffffff;
      }

      li {
        padding-bottom: 10px;
        color: #828282;
      }
    }
  }
</style>