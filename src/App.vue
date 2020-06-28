<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: "Noto Sans SC", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  body {
    background-image: linear-gradient(20deg, #02c39a, #028090, #05668d);
  }
}

@media screen and (max-width: 600px) {
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    font-family: "Noto Sans SC", sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    box-sizing: border-box;
    width: 100%;
    height: -webkit-fill-available;
    body {
      min-height: 100vh;
      min-height: -webkit-fill-available;
      background-image: linear-gradient(20deg, #02c39a, #028090, #05668d);
      #app {
        height: 100%;
      }
    }
  }
}
</style>
