import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
import axios from 'axios'
import VueAxios from 'vue-axios'

Amplify.configure(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  vuetify
}).$mount('#app')
