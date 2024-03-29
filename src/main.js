import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from './assets/ajax/ajax'
Vue.config.productionTp = false

// Vue.prototype.$axios = axios   // this.$axios


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);    

import "@/css/index.scss";


require("babel-polyfill");
// require("'@babel/polyfill'")
// import 'babel-polyfill'
// import "polyfill";
// require("polyfill");

new Vue({
  router,
  store,
  render: h => h(App),
  watch:{
    '$route':function(to,from){
      // console.log(to.name);
    }
  }
}).$mount('#app')
