import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  question: "",
  askQuestion: "",
  isShow: true,
  storedCardMessages: [{ title: "start", msg: "請點下列選項開始對話！" }],
  cardMessages: [
    {
      title: "ask_about",
      msg: "我想知道你是誰？"
    },
    {
      title: "ask_skill",
      msg: "你有什麼專業技術嗎?"
    },
    {
      title: "ask_contact",
      msg: "想知道你的聯絡方式。"
    },
    {
      title: "ask_other",
      msg: "我有其他的問題耶。"
    }, // About start
    {
      title: "about",
      msg:
        "我是小怪物，本名邱旻鋒，是位前端開發者，自2016年起自學網站開發，主要為獨立開發，希望能夠進入一個不錯的團隊共同開發。"
    },
    {
      title: "about",
      msg:
        "坦白說我認為自己是一個很難全神專注在一件事情的人，因為時常有出乎意料的靈感從腦中飛過，不過也因為這樣常常幫助朋友解決遇到的難題。"
    },
    {
      title: "about",
      msg:
        "有人對我說過：「其實，我覺得你的才能比較適合當專案經理耶。」這段話對我來說是個很大的鼓勵，我不希望自己被一個框架所限制住。"
    },
    {
      title: "about",
      msg:
        "就像是，曾讀過社會系的我走上了前端開發者這條路一樣，雖然不知道前方有什麼，但正是因為不知道才更應該往前走。"
    }, //Skill Start
    {
      title: "skill",
      msg: "因為我是一位前端工程師，所以基本上都是往架設網站的技術為主。"
    },
    {
      title: "skill",
      msg:
        "HTML / CSS / Javascript 這三個是寫網頁前端的三大基礎。沒有不會的理由030"
    },
    {
      title: "skill",
      msg: "現在這個網站，是使用【Vue.js】的框架搭配【Vuex】寫出來的。"
    },
    {
      title: "skill",
      msg: "雖然身為前端開發者，但還是有學習一些後端技術。"
    },
    {
      title: "skill",
      msg: "不論是透過【Node.js】架設伺服器或是【SSH】操控遠端【Linux】系統等。"
    },
    {
      title: "skill",
      msg:
        "不只如此，為了要將自己的網站發佈出來，也學會使用【Nginx】來進行反向代理。"
    },
    {
      title: "skill",
      msg: "當然，不僅如此而已，在這裡沒辦法一次講完。"
    },
    {
      title: "skill",
      msg:
        "只能說，技能樹再亂點一些，就可以把自己的標籤變成全端工程師了呢（苦笑"
    }, // Contact start
    {
      title: "contact",
      msg: "想要與我聯絡嗎？"
    },
    {
      title: "contact",
      msg: "右上角那邊是我的Facebook、Github以及Linkedin"
    },
    {
      title: "contact",
      msg:
        "如果是正式邀約或是提案，請透過電子郵件：「y779380@gmail.com」附上主旨與您的聯絡方式喔。"
    },
    {
      title: "contact",
      msg: "謝謝你~"
    }, // Plan start
    {
      title: "plan",
      msg: "我會從2020年7月6日開始服替代役喔！"
    },
    {
      title: "plan",
      msg:
        "因為也要軍事訓練的關係，因此7月6日開始會有兩星期的時間無法與我聯繫。"
    },
    {
      title: "plan",
      msg: "但是其他時間都能與我聯絡，11月初役畢，希望找一份前端正職工作。"
    },
    {
      title: "plan",
      msg: "如果看了我的介紹覺得不錯的話，不訪與我聯繫！"
    },
    {
      title: "plan",
      msg: "偷偷把履歷放在這裡好了XD"
    },
    {
      title: "plan",
      msg: "這是CakeResume的履歷連結：https://ppt.cc/fZckHx"
    }, // Other start
    {
      title: "other",
      msg: "想知道更多關於我的事情嗎？"
    },
    {
      title: "other",
      msg: "嗯... 我想想喔OAOa"
    },
    {
      title: "other",
      msg: "不然這樣好了，我開一個表單給你填，讓我收集更多問題！"
    },
    {
      title: "other",
      msg: "連結在這：https://reurl.cc/L3r1R7"
    },
    {
      title: "other",
      msg: "如果有重要的事情想連絡，可以透過其他方式直接聯絡我喔！"
    }
  ]
};

const getters = {
  getCardMessages: state => {
    return state.cardMessages.filter(el => el.title === state.question);
  },
  getAskCardMessages: state => {
    return state.cardMessages.filter(elm => elm.title === state.askQuestion);
  }
};

const mutations = {
  getQuestion(state, payload) {
    state.question = payload;
  },
  getAskQuestion(state, payload) {
    state.askQuestion = payload;
  },
  setStoredMessage(state) {
    state.isShow = false;
    const askMessage = state.cardMessages.find(function(item) {
      return item.title === state.askQuestion;
    });
    const computedMessages = state.cardMessages.filter(
      el => el.title === state.question
    );
    state.storedCardMessages.push(askMessage);

    for (let i = 0; i < computedMessages.length; i++) {
      let temp = i;
      setTimeout(function() {
        state.storedCardMessages.push(computedMessages[temp].msg);
      }, 1200 * i);
    }
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations
});
