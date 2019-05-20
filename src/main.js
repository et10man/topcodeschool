import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$companyName = "接棒程式設計學校";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
