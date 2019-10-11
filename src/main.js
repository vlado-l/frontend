import Vue from 'vue'
import Layout from '@/Layout.vue'

import router from '@/plugins/router'
import store from '@/plugins/store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(Layout)
}).$mount('#app')
