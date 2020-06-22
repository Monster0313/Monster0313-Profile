<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;

  body {
    background-image: linear-gradient(20deg, #02c39a, #028090, #05668d);
  }
}
</style>
