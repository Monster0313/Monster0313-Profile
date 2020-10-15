# Monster0313｜小怪物的個人網站

Link: [Monster0313's Profile](https://monster0313.me)

---

## 這一份專案使用到 Vue, Vuex, Vue-Router

![圖片內為Monster0313的個人網站畫面](https://i.imgur.com/dZZv1mU.png "Monster0313's Profile")

---

## 開發歷程
1.  初步規劃內容、版面呈現方式，想出三種初版，決定最終樣式開始開發。
2.  預想透過資料庫與切割字串方式，讓使用者自己輸入對話，找到對應關鍵字回覆，
    但由於技術力不足，加上後端技術不精熟，因此將輸入的部分改成預設按鈕呈現。
3.  第一次遇到困難處 **「不知道如何在兩個 Components 之間傳遞參數」**，可參見 [QuestionButton.vue](https://github.com/Monster0313/Monster0313-Profile/blob/master/src/components/QuestionButton.vue) 以及 [Question.vue](https://github.com/Monster0313/Monster0313-Profile/blob/master/src/components/Question.vue)
4.  逐步解決，一開始希望只透過 Vue 本身的的 $emit & Props 來解決問題。
5.  後來發現如果傳遞的過程中使用 Bus 當做載體能夠讓傳遞流程更加模組化，
    但搜尋使用載體的流程後，了解到其實只要使用 Vuex 就可以更簡單地完成這些事情，因此決定導入 Vuex。
6.  也因為這是第一次使用 Vuex 有許多 Components import 了許多其實用不太到的 State，
    但我認為這些都是一步步學習的歷程因此保留了下來，目前正在進行的專案也已經更了解 Vuex 的狀態與使用。
7.  To be continued...
