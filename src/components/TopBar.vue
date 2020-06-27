<template>
  <div class="top-bar">
    <h1 class="title">
      Monster0313's Profile Website
    </h1>
  </div>
</template>

<style lang="scss">
.top-bar {
  position: fixed;
  width: 500px;
  height: 60px;
  border-radius: 10px 10px 0 0;
  background-color: rgba($color: #19535f, $alpha: 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 25px;
    color: #f5fafa;
    text-align: center;
  }
}

@media screen and(max-width: 600px) {
  .top-bar {
    position: fixed;
    width: 300px;
    height: 60px;
    border-radius: 10px 10px 0 0;
    background-color: rgba($color: #19535f, $alpha: 1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 22px;
      color: #f5fafa;
      text-align: center;
    }
  }
}
</style>
