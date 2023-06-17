<template>
    <v-card
      :max-width="mdAndUp ? 180 : 220"
      :height="mdAndUp ? 245 : 285"
      class="mx-auto mt-1 text-center"
      variant="text"
    >
    <v-avatar
        color="grey"
        :size="mdAndUp ? 140 : 219"
        rounded="50"
    >
        <v-img
          cover
         :width="mdAndUp ? 180 : 220"
          :src="`https://image.tmdb.org/t/p/original${castObjectActor.profile_path}`"
          :lazy-src="`https://image.tmdb.org/t/p/original${castObjectActor.profile_path}`"
          aspect-ratio="1"
          class="bg-grey-lighten-2"
          :alt="castObjectActor.name"
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
    </v-avatar>
    <div class="text-capitalize font-weight-bold text-center mt-2 titleCastingPersonCard">
      <p class="mx-1">{{ castObjectActor.name }}</p>
    </div>
    </v-card>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
    name: 'CardCastedActor',
    props: {
      castObjectActor: {
        type: Object
      }
    },
    setup() {

        const { mdAndUp } = useDisplay()

        return {

            // Breakpoints
            mdAndUp,

        }

    }
}
</script>

<style scoped>
.titleCastingPersonCard {
    font-size: 17px !important;
}
</style>