<template>
    <v-container fluid>
        <v-sheet color="#eff6ee" class="mx-8">
          <v-row v-if="mdAndUp" no-gutters align="center">
            <slot name="categorytitle"></slot>
          </v-row>
            <v-row align="center" justify="space-between">
              <v-col v-for="movie in arrayMovies" :key="movie.id" cols="12" xxl="2" xl="2" lg="3" md="4" sm="6">
                <v-hover>
                  <template v-slot:default="{ isHovering, props }">
                    <v-card
                      v-bind="props"
                      :max-width="mdAndUp ? 230 : 270"
                      :max-height="mdAndUp ? 390 : 444"
                      :color="(mdAndUp && isHovering) ? '#87A5E8' : 'undefined'" 
                      :class="mdAndUp ? 'cardCursorType' : ''"
                      @click="moveToDetailsMovie(movie.id)"
                      class=" mx-auto"
                      variant="tonal"
                    >
                      <template v-slot:loader="{ isActive }">
                        <v-progress-linear
                          :active="isActive"
                          color="#eff6ee"
                          :height="4"
                          indeterminate
                        ></v-progress-linear>
                      </template>
                      <v-img
                        cover
                       :width="mdAndUp ? 230 : 270"
                        :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
                        :lazy-src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
                        aspect-ratio="1"
                        class="bg-grey-lighten-2"
                        :alt="movie.title"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="#87A5E8"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <v-card-item>
                        <v-card-title class="text-capitalize">{{movie.title}}</v-card-title>
                        <v-tooltip
                        v-if="mdAndUp"
                        :width="mdAndUp ? 230 : 270"
                        :contained="true"
                        activator="parent"
                        location="top"
                        >
                          <div class="text-capitalize text-center mx-2">{{movie.title}}</div>
                        </v-tooltip>
                      </v-card-item>
                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0 my-1"
                        >
                          <v-rating
                            :model-value="`${movie.vote_average / 2}`"
                            color="amber"
                            density="compact"
                            half-increments
                            readonly
                            size="small"
                          ></v-rating>
                          <div class="text-grey mt-1 ml-auto">
                            {{movie.vote_average.toFixed(1)}} ({{movie.vote_count}})
                          </div>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
              <!-- Se deja esta columna para agregar un espaciado automatico para que las peliculas impares se colapsen a la izquierda -->
              <v-col v-if="mdAndUp"></v-col>
            </v-row>
        </v-sheet>

    </v-container>
</template>

<script>
import { useRouter } from 'vue-router'

import { useDisplay } from 'vuetify'

import useMain from '@/modules/main/composables/useMain'


export default {
    name: 'CategoryCardMovie',
    props: {
      arrayMovies: {
        type: Array,
        default: []
      }
    },
    setup(){

        const router = useRouter()

        const { mdAndUp, xlAndUp } = useDisplay()

        const { getActionMovieDetails, setMutationIsPageLoadingStatus, getterIsPageLoading } = useMain ()

        //Metodos
        const moveToDetailsMovie = async (idMovie) => {
          setMutationIsPageLoadingStatus(true)
          const resp = await getActionMovieDetails(idMovie)
          if(resp) router.push({ name: 'details-view', params: { idMovie } })
        }

        return {
            moveToDetailsMovie,

            //Breakoints
            mdAndUp,
            xlAndUp
        }

    }
}
</script>

<style scoped>
.cardCursorType {
  cursor: pointer !important;
}
</style>