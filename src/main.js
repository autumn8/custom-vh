import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('keyboard-state', {
  bind: function(el, binding) {
      el.addEventListener('blur', (event) => {
          console.log('blur');
      }, true);

      el.addEventListener('focus', (event) => {
        console.log('focus');
      });
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
