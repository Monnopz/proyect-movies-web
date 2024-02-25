import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'

// Vuetify, desde local plugins
import vuetify from '@/plugins/vuetify'

// Router y Store
import router from './router'
import store from './store'

const app = createApp(App)
app.use(vuetify)
app.use(store)
app.use(router)
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                gcTime: 1000 * 60 * 5 // Cuanto tiempo permanece la info en memoria
            }
        }
    }
})
app.mount('#app')
