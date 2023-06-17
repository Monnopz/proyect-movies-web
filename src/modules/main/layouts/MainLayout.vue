<template>
  <div class="home">
    <Appbar :isHomeView="isHomeView" />
    <router-view></router-view>
    <Footer />
    <OverlayLoading />
  </div>
</template>

<script>
// @ is an alias to /src
import { defineAsyncComponent, ref, watch, onMounted } from 'vue'

import { useRoute } from 'vue-router'

export default {
  name: 'MainLayout',
  components: {
    Appbar: defineAsyncComponent(() => import('@/modules/main/components/Appbar.vue')), //Cargas pequeñas en cache,
    OverlayLoading: defineAsyncComponent(() => import('@/modules/main/components/OverlayLoading.vue')), //Cargas pequeñas en cache,
    Footer: defineAsyncComponent(() => import('@/modules/main/components/Footer.vue')), //Cargas pequeñas en cache
  },

  setup() {

    const route = useRoute()

    const isHomeView = ref()

    onMounted(()=> {
      if(route.name === 'home-view'){
        isHomeView.value = true
      }
      else {
        isHomeView.value = false
      }
    })

    // Watch
    watch(() => route.name === 'home-view', (val) => {
        isHomeView.value = val
    })

    return {

      isHomeView

    }

  }

}
</script>
