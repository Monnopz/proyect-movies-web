<template>
    <div class="text-center mb-3">
        <v-pagination
          show-first-last-page
          v-model="page"
          :length="20"
          :total-visible="5"
        ></v-pagination>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'HomeViewPagination',
    setup(){

      const page = ref(1);

      return {
        page
      }

    }
}
</script>
