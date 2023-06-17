<template>
  <v-row align="center" justify="space-between">
      <v-col v-for="castActor in castArray" :key="castActor.id" cols="12" xxl="1" xl="2" lg="2" md="3" sm="6">
          <CardCastedActor :castObjectActor="castActor" />
      </v-col>
      <!-- Se deja esta columna para agregar un espaciado automatico para que las peliculas impares se colapsen a la izquierda -->
      <v-col></v-col>
  </v-row>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'GroupCastedActorMdAndUp',
    props: {
        castArray: {
            type: Array
        }
    },
    components: {
        CardCastedActor: defineAsyncComponent(() => import('@/modules/main/components/CardCastedActor.vue')), //Cargas pequeñas en cache,
    },
    setup() {

        return {

        }

    }

}
</script>

<style>

</style>