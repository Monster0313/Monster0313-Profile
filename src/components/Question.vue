<template>
  <div class="question">
    <div class="question-wall">
      <div class="question-wrap">
        <QuestionButton
          :question-text="'你是誰'"
          :question-title="'about'"
          :ask-title="'ask_about'"
        ></QuestionButton>
        <QuestionButton
          :question-text="'專業技能'"
          :question-title="'skill'"
          :ask-title="'ask_skill'"
        ></QuestionButton>
        <QuestionButton
          :question-text="'如何聯絡'"
          :question-title="'contact'"
          :ask-title="'ask_contact'"
        ></QuestionButton>
        <QuestionButton
          :question-text="'目前規劃'"
          :question-title="'plan'"
          :ask-title="'ask_plan'"
        ></QuestionButton>
        <QuestionButton
          :question-text="'其他問題'"
          :question-title="'other'"
          :ask-title="'ask_other'"
        ></QuestionButton>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionButton from "../components/QuestionButton";

export default {
  components: {
    QuestionButton
  }
};
</script>

<style lang="scss">
.question {
  width: 500px;
  height: 60px;
  border-radius: 0 0 10px 10px;
  position: fixed;
  bottom: 10vh;
  background-color: rgba($color: #19535f, $alpha: 0.8);
  .question-wall {
    width: 100%;
    height: 100%;
    .question-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    }
  }
}

@media screen and (max-width: 600px) {
  .question {
    width: 300px;
    height: 70px;
    border-radius: 0 0 10px 10px;
    position: fixed;
    bottom: 10%;
    background-color: rgba($color: #19535f, $alpha: 0.95);
    .question-wall {
      width: 100%;
      height: 100%;
      .question-wrap {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
      }
    }
  }
}
</style>
