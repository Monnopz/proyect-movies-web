<template>
    <v-tabs
      v-model="tab"
      bg-color="#eff6ee"
      centered
      color="#87a5e8"
      center-active
      grow
    >
      <v-tab
        v-for="item in arrayGenresCategories"
        :key="item.id"
        :value="item.name"
      >
      <v-icon icon="mdi-video-plus-outline" :size="25" start></v-icon>
        {{ item.name }}
      </v-tab>
    </v-tabs>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'TabsSelectMovieCategory',
    props: {
      arrayGenresCategories: {
        type: Array
      }
    },
    setup() {

        const tab = ref(0)

        const items = ref([
          'Estrenos', 'Shopping', 'Videos', 'Images', 'News',
        ])

        // const itemsLength = ref(items.value.length)

        //Para que funcione el tab dinamicamente debe de sustituirse el items del tab con la longitud del 
        
        // // Watch, el valor que le llega se le resta
        // watch(itemsLength.value, (val) => tab.value = val - 1)

        return {
            tab,
            items
        }

    }
}
</script>

<style scoped>

</style>