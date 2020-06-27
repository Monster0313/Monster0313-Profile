import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VBodyScrollLock from "v-body-scroll-lock";

Vue.use(VBodyScrollLock);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
