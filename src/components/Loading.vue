<template>
  <div class="card-wall">
    <div class="img-wrap">
      <img :src="'https://i.imgur.com/lwoMzrE.jpg'" />
    </div>
    <div class="card-wrap">
      <div class="card">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wall {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .img-wrap {
    width: auto;
    margin-left: 20px;
    img {
      width: 45px;
      border-radius: 50%;
    }
  }
  .card-wrap {
    max-width: 200px;
    max-height: 60px;
    display: inline-block;
    border-radius: 10px;
    margin-left: 15px;
    background-color: rgba($color: #f5fafa, $alpha: 0.2);
    .card {
      margin: auto;
      padding: 10px;
      .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-ellipsis div {
        position: absolute;
        top: 20%;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
      }
      .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.8s infinite;
      }
      .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.8s infinite;
      }
      .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.8s infinite;
      }
      .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.8s infinite;
      }
      @keyframes lds-ellipsis1 {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes lds-ellipsis3 {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }
      @keyframes lds-ellipsis2 {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(24px, 0);
        }
      }
    }
  }
}
</style>
