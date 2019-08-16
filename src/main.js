import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './assets/ajax/ajax'
Vue.config.productionTp = false


require("babel-polyfill");

import "@/css/base.css";
import "@/css/common.css";
import "@/css/reset.css";

// 引入vue-amap
import AMap from 'vue-amap';
Vue.use(AMap);

// // // 初始化  vue-amap
// AMap.initAMapApiLoader({
//   // 高德的key
//   key: 'b509ac189c80b53d5d981a89f458f2fc',
//   // 插件集合 （插件按需引入）
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
// });

// import '@babel/polyfill'
// import 'babel-polyfill'
// import "polyfill";

new Vue({
  router,
  store,
  render: h => h(App),
  watch:{
    '$route':function(to,from){
      console.log(to.name);
    }
  }
}).$mount('#app')
