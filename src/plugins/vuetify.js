import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import '@fortawesome/fontawesome-free/css/all.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  }
})
