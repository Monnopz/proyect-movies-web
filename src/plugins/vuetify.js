// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Import CSS Icons; Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
    },
    components,
    directives
})

export default vuetify