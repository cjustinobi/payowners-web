import Vue from 'vue'
import App from './App.vue'
import axios from '../axios';
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.$eventBus = new Vue();
Vue.use(Antd);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
