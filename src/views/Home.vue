<template>
  <div class="container">
    <div class="chat">
      <div class="title">
        <h1>Monster0313</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss">
$scrollbar-color-front: rgba(
  $color: #414141,
  $alpha: 0.2
);
$scrollbar-color-back: rgba(
  $color: #f5fafa,
  $alpha: 0
);

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .chat {
    width: 500px;
    height: 80vh;
    overflow-y: scroll;
    scrollbar-color: $scrollbar-color-front $scrollbar-color-back;
    scrollbar-width: thin;
    background-color: rgba($color: #ffffff, $alpha: 0.1);
    .title {
    }
  }
}

*::-webkit-scrollbar {
  width: 6px;
}
*::-webkit-scrollbar-track {
  background: $scrollbar-color-back;
}
*::-webkit-scrollbar-thumb {
  background-color: $scrollbar-color-front;
  border-radius: 20px;
}
</style>
