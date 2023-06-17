import { createStore } from 'vuex'

import mainModule from '@/modules/main/store'

const store = createStore({
  
  modules: {

    mainModule

  }

})

export default store
