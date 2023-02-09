import { createApp } from 'vue'
// import './style.css'

// router
import { router } from './helpers/router'

// tailwindcss
import './index.css'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

createApp(App)
.use(router)
.use(VueAxios, axios)
.mount('#app')
