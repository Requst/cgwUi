import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全部引入
import 'cgw-ui/dist/css/index.css'
import MUI from 'cgw-ui'
Vue.use(MUI)

// // 按需引入
// import '../components/css/index.scss'
// import card from '../components/lib/card/index.js'
// Vue.use(card)
// import '../components/css/index.scss'
// import demo from '../components/lib/demo/index.js'
// Vue.use(demo)


new Vue({
  render: h => h(App)
}).$mount('#app')
