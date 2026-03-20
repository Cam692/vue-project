
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/main.scss'
import './router/index'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
