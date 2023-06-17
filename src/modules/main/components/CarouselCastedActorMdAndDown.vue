<template>
    <v-window
        v-model="windowItem"
        continuous
        show-arrows
        class="mx-n12 window-height"
    >
        <template v-slot:prev="{ props }">
          <v-btn
            icon="mdi-menu-left" 
            variant="tonal"
            @click="props.onClick"
          ></v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn
            icon="mdi-menu-right" 
            variant="tonal"
            @click="props.onClick"
          ></v-btn>
        </template>
        <v-window-item
          v-for="castActor in castArray"
          :key="castActor.id"
        >
            <v-row align="center" justify="center">
                <v-col cols="12" xxl="12" xl="12" lg="12" md="12" sm="12">
                    <CardCastedActor :castObjectActor="castActor" />
                </v-col>
            </v-row>
        </v-window-item>
    </v-window>
    <p class="text-h5 text-subtitle-2 text-center">{{ windowItem + 1 }} de {{ castArray?.length }}</p>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'

export default {
    name: 'CarouselCastedActorMdAndDown',
    props: {
      castArray: {
        type: Array
      }
    },
    components: {
        CardCastedActor: defineAsyncComponent(() => import('@/modules/main/components/CardCastedActor.vue')), //Cargas pequeñas en cache,
    },
    setup() {

        const windowItem = ref(0)

        return {

            windowItem

        }

    }

}
</script>

<style>

</style>