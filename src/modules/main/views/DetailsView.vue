<template>
    <v-main>
        <v-container fluid>
            <v-sheet color="#eff6ee" class="mx-8">
                <v-row align="center" justify="space-between" class="mt-xxl-4 mt-xl-4 mt-lg-4">
                    <v-col cols="12" xxl="2" xl="2" lg="2" md="12" sm="12">
                        <v-img
                            cover
                           :width="mdAndUp ? 230 : 270"
                            :src="`https://image.tmdb.org/t/p/original${getterMovieDetails.poster_path}`"
                            :lazy-src="`https://image.tmdb.org/t/p/original${getterMovieDetails.poster_path}`"
                            aspect-ratio="1"
                            class="bg-grey-lighten-2 mx-auto"
                            :alt="getterMovieDetails.title"
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
                    </v-col>
                    <v-col cols="12" xxl="10" xl="10" lg="10" md="12" sm="12">
                        <p class="text-overline titleFontSize"><strong>Título: {{ getterMovieDetails.title }}</strong></p>
                        <p class="text-capitalize text-grey">{{ getterMovieDetails.original_title }}</p>
                        <v-row
                          align="center"
                          class="mx-0"
                          no-gutters
                        >
                          <v-rating
                            :model-value="`${getterMovieDetails.vote_average / 2}`"
                            color="amber"
                            density="compact"
                            half-increments
                            readonly
                            size="small"
                          ></v-rating>
                          <div class="text-grey mt-1 ml-1">
                            {{getterMovieDetails.vote_average?.toFixed(1)}} ({{getterMovieDetails.vote_count}})
                          </div>
                        </v-row>
                        <p class="text-h5 text-subtitle-2 mt-4 sinopsisFontSize">Sinopsis</p>
                        <p class="text-justify mt-2">
                            {{ getterMovieDetails.overview }}
                        </p>
                    </v-col>
                    <v-col :class="mdAndUp ? 'mt-12' : 'mt-4'" cols="12" xxl="12" xl="12" lg="12" md="12" sm="12">
                        <p :class="mdAndUp ? 'text-start' : 'text-center ml-2'" class="text-overline titleFontSize mb-4"><strong>Casting</strong></p>
                        <CarouselCastedActorMdAndDown :castArray="getterMovieDetails.cast" v-if="!mdAndUp" />
                        <GroupCastedActorMdAndUp :castArray="getterMovieDetails.cast" v-else />
                    </v-col>
                </v-row>
            </v-sheet>
        </v-container>
    </v-main>
</template>

<script>
import { defineAsyncComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useDisplay } from 'vuetify'

import useMain from '@/modules/main/composables/useMain'


export default {
    name: 'DetailsView',
    components: {
        CarouselCastedActorMdAndDown: defineAsyncComponent(() => import('@/modules/main/components/CarouselCastedActorMdAndDown.vue')), //Cargas pequeñas en cache,
        GroupCastedActorMdAndUp: defineAsyncComponent(() => import('@/modules/main/components/GroupCastedActorMdAndUp.vue')), //Cargas pequeñas en cache,
    },
    setup() {

        const route = useRoute()
    
        const { mdAndUp, xlAndUp, xxl } = useDisplay()

        const { getActionMovieDetails, getterMovieDetails } = useMain()

        onMounted(() => {
            if(Object.keys(getterMovieDetails.value).length === 0) {
                getActionMovieDetails(route.params.idMovie)
            }
        })

        return {

            getterMovieDetails,

            // Breakpoints
            mdAndUp,
            xlAndUp,
            xxl

        }
    }
}
</script>

<style scoped>
.titleFontSize {
    font-size: 29px !important;
}
.sinopsisFontSize {
    font-size: 23px !important;
}
.window-height {
    height: 285px !important;
}
</style>