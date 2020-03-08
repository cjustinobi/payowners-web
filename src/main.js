import Vue from 'vue'
import App from './App.vue'
import axios from '../axios';
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/style.scss'
import './assets/bootstrap-4.3.1-dist/css/bootstrap.min.css'
import './assets/fontawesome/fontawesome-free-5.9.0-web/css/all.min.css'
// import './assets/js/jquery-3.4.1.min'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.$eventBus = new Vue();
Vue.use(Antd);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
