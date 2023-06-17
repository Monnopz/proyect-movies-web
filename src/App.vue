<template>
  <v-app class="backgroundColor">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.backgroundColor {
  background-color: #eff6ee;
}
</style>
