// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'nprogress/nprogress.css'
import { createAppRouter } from './router'

const app = createApp(App)
const pageLimit = [null, 1, 1, 2, 2] 

app.use(createPinia())
app.use(createAppRouter(pageLimit))

app.mount('#app')