import { createApp } from 'vue'
import App from './App.vue'

// Vuetify, desde local plugins
import vuetify from '@/plugins/vuetify'

// Router y Store
import router from './router'
import store from './store'

createApp(App).use(vuetify).use(store).use(router).mount('#app')
