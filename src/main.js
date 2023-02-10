import { createApp } from 'vue'
// import './style.css'
import router from './helpers/router'
// store
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'

import App from './App.vue'

createApp(App)
.use(router)
.use(VueAxios, axios)
.mount('#app')
