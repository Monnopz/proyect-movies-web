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
  background-color: #fff;
}
.body, .v-application{
    font-family: 'Wix Madefor Display', sans-serif;
}
</style>
