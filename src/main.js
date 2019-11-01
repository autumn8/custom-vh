import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EventBus from '@/eventBus'

Vue.config.productionTip = false

Vue.directive('keyboard-state-broadcaster', {
  bind (el, binding) {
    el.addEventListener('blur', event => EventBus.$emit('KEYBOARD_OPEN', false));

    el.addEventListener('focus', event => EventBus.$emit('KEYBOARD_OPEN', true));
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
