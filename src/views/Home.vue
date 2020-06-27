<template>
  <div class="container">
    <SocialMedia></SocialMedia>
    <div class="chat">
      <TopBar></TopBar>
      <!-- TODO 透過參數取得使用者按對話內容，判斷當下對話內容決定是否用：「你還要再問同樣的問題嗎？」等回覆 -->
      <!-- TODO 每一個指定參數都需綁定物件(對話內容 ID) 用迴圈跑 設回應時間來讀取下一段內容 -->
      <Card :message="storedMessages"></Card>
      <Question v-if="isShow"></Question>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import TopBar from "../components/TopBar";
import Question from "../components/Question";
import SocialMedia from "../components/SocialMedia";

import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Card,
    TopBar,
    Question,
    SocialMedia
  },
  data() {
    return {
      isShow: this.$store.state.isShow
    };
  },
  computed: {
    getCardMessages() {
      return this.$store.getters.getCardMessages;
    },
    getAskCardMessages() {
      return this.$store.getters.getAskCardMessages;
    },
    ...mapState({
      cardMessages: state => state.cardMessages,
      storedMessages: state => state.storedCardMessages,
      isShow: state => state.isShow
    })
  },
  methods: {
    scrollToEnd() {
      var container = document.querySelector(".chat");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    }
  },
  mounted() {
    this.scrollToEnd();
  },
  updated() {
    this.scrollToEnd();
  }
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
  overflow: hidden;
  .chat {
    width: 500px;
    height: 80vh;
    border-radius: 10px;
    position: relative;
    padding-right: -17px; //scroll-bar hidden
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    background-color: rgba($color: #ffffff, $alpha: 0.2);
  }
}

*::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 600px) {
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    .chat {
      width: 300px;
      height: 80vh;
      border-radius: 10px;
      position: relative;
      padding-right: -17px; //scroll-bar hidden
      overflow-y: scroll;
      overflow-x: hidden;
      scrollbar-width: none;
      background-color: rgba($color: #ffffff, $alpha: 0.2);
    }
  }
}
</style>
