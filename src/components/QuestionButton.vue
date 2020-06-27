<template>
  <div class="question-button">
    <button
      v-on:click="
        getAskQuestion(askTitle);
        setQuestionTitle(questionTitle);
        setStoredMessage();
        this.isShow = false;
      "
    >
      {{ questionText }}
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    questionTitle: {
      type: String,
      required: true
    },
    questionText: {
      type: String,
      required: true
    },
    askTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    setQuestionTitle(payload) {
      this.$store.commit("getQuestion", payload);
    },
    getAskQuestion(payload) {
      this.$store.commit("getAskQuestion", payload);
    },
    setStoredMessage() {
      this.$store.commit("setStoredMessage");
    }
  },
  computed: {
    ...mapState({
      question: state => state.question,
      askQuestion: state => state.askQuestion
    })
  }
};
</script>

<style lang="scss">
.question-button {
  button {
    background-color: #f5fafa;
    border: none;
    min-width: 80px;
    height: 30px;
    border-radius: 10px;
    font-size: 16px;
    color: #414141;
    &:hover,
    &:active,
    &:focus {
      background-color: #414141;
      color: #f5fafa;
    }
  }
}
@media screen and (max-width: 600px) {
  .question-button {
    button {
      background-color: #f5fafa;
      border: none;
      min-width: 80px;
      height: 20px;
      border-radius: 5px;
      margin: 5px;
      font-size: 14px;
      color: #414141;
      &:hover,
      &:active,
      &:focus {
        background-color: #414141;
        color: #f5fafa;
      }
    }
  }
}
</style>
