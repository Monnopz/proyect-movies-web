<template>
    <div class="text-center mb-3">
        <v-pagination
          show-first-last-page
          :disabled="getterIsPageLoading"
          v-model="localPage"
          :length="getterMovies.total_pages"
          :total-visible="5"
        ></v-pagination>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import useMain from '@/modules/main/composables/useMain'

export default {
    name: 'HomeViewPagination',
    setup(){

      const { getActionMovies, setMutationIsPageLoadingStatus, getterMovies, getterIsPageLoading, getterPaginationPage  } = useMain()

      const localPage = ref(getterPaginationPage.value); // Saca el valor de pagina del state
    

      // Watch
      // Vigila cada cambio en la pagina para hacer la petición de la nueva pagina de peliculas
      watch(() => localPage.value, (val) => {
        setMutationIsPageLoadingStatus(true)
        getActionMovies( val ) // Le mando el numero de pagina (val)
      })

      return {
        localPage,

        getterMovies,
        getterIsPageLoading
      }

    }
}
</script>
