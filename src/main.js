import Vue from 'vue';
import Axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faEnvelope, faCheck, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';


library.add(faCoffee, faEnvelope, faCheck, faLock);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = token;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
