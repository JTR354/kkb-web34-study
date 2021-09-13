import Vue from "vue";
import App from "./App.vue";
import create from "./util/create";
import Notice from "./components/Notice.vue";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

Vue.prototype.$notice = function (opts) {
  const comp = create(Notice, opts);
  comp.show();
  return comp;
};
new Vue({
  render: (h) => h(App),
}).$mount("#app");
