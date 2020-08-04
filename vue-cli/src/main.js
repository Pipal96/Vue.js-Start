import Vue from 'vue'
import App from './App.vue'
import Example from './components/Example.vue'
import Header from './components/Header.vue'

Vue.config.productionTip = false

Vue.component("app-example", Example);
Vue.component("app-header", Header);

new Vue({
  render: h => h(App),
}).$mount('#app')