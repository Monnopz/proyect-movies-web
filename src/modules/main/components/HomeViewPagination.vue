<template>
    <div class="text-center mb-3">
        <v-pagination
          @first="changePage"
          @last="changePage"
          @next="changePage"
          @prev="changePage"
          @update:model-value="changePage"
          show-first-last-page
          :disabled="getterIsPageLoading"
          v-model="localPage"
          :length="getterMovies.total_pages"
          :total-visible="5"
        ></v-pagination>
    </div>
</template>

<script>
import { ref } from 'vue'
import useMain from '@/modules/main/composables/useMain'

export default {
    name: 'HomeViewPagination',
    setup(){

      const { getterMovies, getterIsPageLoading, getterPaginationPage, setMutationPaginationPage  } = useMain()

      const localPage = ref(getterPaginationPage.value); // Saca el valor de pagina del state

      const changePage = ( pageNumber ) => {
        setMutationPaginationPage(pageNumber); // El vueQuery se activa al detectar un cambio en la variable state de paginationPage. Es por eso que no se importa el composable useMovies()
      }

      return {
        localPage,

        getterMovies,
        getterIsPageLoading,

        changePage
      }

    }
}
</script>
