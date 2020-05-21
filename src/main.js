import Vue from 'vue'
import axios from './plugins/axios'
import App from './App.vue'
import VueRrouter from 'vue-router'
import Router from './router/router'

Vue.config.productionTip = false

Vue.use(VueRrouter)
const router = new VueRrouter({
  mode: 'history',
  routes:Router
})

Vue.prototype.$Axios = axios

//自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = '#' + Math.random().toString(16).slice(2,8);
//   }
// })
// Vue.directive('panels',{
//   bind(el,binding,vnode){
//     if(binding.value == 'wide'){
//       el.style.maxWidth = "1440px"
//     }else if(binding.value == 'narrow'){
//       el.style.maxWidth = "760px"
//     }
//     if(binding.arg == "bg"){
//       el.style.background ="#448b48";
//       el.style.padding = "20px"
//     }
//   }
// })

//自定义过滤器 filter
// Vue.filter('to-uppercase',function(value){
//     return value.toUpperCase();
// })
// Vue.filter('intercept',function(value){
//   return value.slice(0,120) + "……";
// })

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
