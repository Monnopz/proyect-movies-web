<template>
  <v-footer app color="#273043">
    <v-row align="center" justify="center" no-gutters>
      <v-col class="text-center footerTitleColor" cols="12" xxl="11" xl="10" lg="10" md="9" sm="7">
        <strong>[ Monnopz ]</strong> — {{ pageDate }}
      </v-col>
      <v-col v-if="mdAndUp" class="text-end" cols="7" xxl="1" xl="2" lg="2" md="3" sm="5">
        <v-btn
          v-for="currentSocialMedia in socialMediaArray"
          :key="currentSocialMedia"
          :class="mdAndUp ? 'mx-2' : ''"
          color="#fff"
          :icon="currentSocialMedia.icon"
          @click="openSocialMedia(currentSocialMedia.link)"
          variant="plain"
          size="small"
        ></v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
export default {
    name: 'Footer',
    setup(){

      const { mdAndUp } = useDisplay()

      const socialMediaArray = ref([
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/gasl1996'},
        { icon: 'mdi-github', link: 'https://github.com/Monnopz'},
        { icon: 'mdi-twitter', link: 'https://twitter.com/Monnopz'},
      ])

      const openSocialMedia = ( link ) => {
        window.open(link, '_blank'); // Redirecciona a las redes sociales, en una nueva pestaña
      }

      return {
        socialMediaArray,
        pageDate: ref(new Date().getFullYear()),

        openSocialMedia,

        //Breakoints
        mdAndUp
      }

    }
}
</script>

<style scoped>
  .footerTitleColor {
    color: #fff;
  }
</style>