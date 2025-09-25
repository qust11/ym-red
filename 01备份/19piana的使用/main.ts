import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'

// https://api.lovelive.tools/api/SweetNothings/Web/1
const app = createApp(App)
app.use(VueAxios, axios)
app.use(createPinia())
app.mount('#app')
