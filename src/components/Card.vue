<template>
  <div class="card-outside-wall">
    <div class="card-outside-wrap" v-for="(item, i) in message" :key="i">
      <div class="ask-card-wall" v-if="typeof item === 'object'">
        <div class="ask-card-wrap">
          <div class="ask-card">
            <p class="message">{{ Object.values(item)[1] }}</p>
          </div>
        </div>
      </div>
      <div class="card-inside-wall" v-show="typeof item === 'string'">
        <div class="img-card-pack">
          <div class="img-wrap">
            <img :src="'https://i.imgur.com/FgPqu0n.jpg'" />
          </div>
          <div class="card-wrap">
            <div class="card">
              <p class="message">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card-outside-wall {
  width: 100%;
  padding-top: 70px;
  padding-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  .card-outside-wrap {
    .ask-card-wall {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: right;
      flex-direction: row;
      .ask-card-wrap {
        max-width: 200px;
        min-height: 28px;
        display: inline-block;
        border-radius: 10px;
        margin-right: 15px;
        background-color: rgba($color: #f5fafa, $alpha: 0.6);
        .ask-card {
          margin: auto;
          padding: 10px;
          p {
            width: 100%;
            font-size: 15px;
            text-align: left;
          }
        }
      }
    }
    .card-inside-wall {
      width: 100%;
      margin-bottom: 20px;
      .img-card-pack {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        .img-wrap {
          width: auto;
          margin-left: 20px;
          margin-top: 5px;
          img {
            width: 40px;
            border-radius: 50%;
          }
        }
        .card-wrap {
          max-width: 200px;
          min-height: 28px;
          display: inline-block;
          border-radius: 10px;
          margin-left: 15px;
          background-color: rgba($color: #f5fafa, $alpha: 0.4);
          .card {
            margin: auto;
            padding: 10px;
            p {
              width: 100%;
              font-size: 15px;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
