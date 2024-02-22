<template>
    <div class="text-center mb-3">
        <v-pagination
          show-first-last-page
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

      const { getActionMovies, getterMovies, setMutationIsPageLoadingStatus, getterPaginationPage } = useMain()

      const localPage = ref(1);

      // Watch
      // Vigila cada cambio en la pagina para hacer la petición de la nueva pagina de peliculas
      watch(() => localPage.value, (val) => {
        setMutationIsPageLoadingStatus(true)
        getActionMovies( val ) // Le mando el numero de pagina (val)
      })

      return {
        localPage,

        getterMovies
      }

    }
}
</script>
