import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from './assets/ajax/ajax'
Vue.config.productionTp = false

// Vue.prototype.$axios = axios   // this.$axios

require("babel-polyfill");


import "@/css/index.scss";



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
