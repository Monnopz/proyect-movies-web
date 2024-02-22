<template>
  <v-main>
      <CategoryCardMovie :arrayMovies="getterMovies.results">
        <template v-slot:categorytitle>
          <v-alert density="comfortable" icon="mdi-video-plus-outline" prominent border="start" border-color="#273043" variant="tonal" color="#273043">
            <template v-slot:title>
              <span class="text-uppercase" :class="xlAndUp ? 'textTitleCardSizeXlAndUp' : 'textTitleCardSize'">{{getterSelectedCategory}}</span>
            </template>
          </v-alert>
        </template>
      </CategoryCardMovie>
      <HomeViewPagination />
  </v-main>
</template>

<script>
import { defineAsyncComponent, onMounted } from 'vue'

import { useDisplay } from 'vuetify'

import useMain from '@/modules/main/composables/useMain'

export default {
    name: 'HomeView',
    components: {
        CategoryCardMovie: defineAsyncComponent(() => import('@/modules/main/components/CategoryCardMovie.vue')), //Cargas pequeñas en cache
        HomeViewPagination: defineAsyncComponent(() => import('@/modules/main/components/HomeViewPagination.vue')) //Cargas pequeñas en cache
    },
    setup(){

      const { xlAndUp } = useDisplay()

      const { getActionMovies, setMutationIsPageLoadingStatus, getterMovies, getterSelectedCategory } = useMain()

      onMounted(() => {
        if(Object.keys(getterMovies.value).length === 0) {
          setMutationIsPageLoadingStatus(true)
          getActionMovies()
        }

      })

      return {

        getterMovies,
        getterSelectedCategory,
        // Breakpoints
        xlAndUp

      }

    }
}
</script>

<style scoped>
.textTitleCardSize {
  font-size: 25px !important;
}
.textTitleCardSizeXlAndUp {
  font-size: 35px !important;
}
</style>