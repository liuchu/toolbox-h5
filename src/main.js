import Vue from 'vue' // vue核心
import antd from 'ant-design-vue' // ant design 核心
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(antd)

new Vue({
  render: h => h(App),
  data: function () {
    return {
      toolBoxUrl: 'http://localhost:8080'
    }
  }
}).$mount('#app')
