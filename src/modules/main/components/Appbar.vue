<template>
    <v-app-bar color="#273043" elevation="0">
        <!-- <template v-if="mdAndUp" v-slot:prepend>
            <v-app-bar-nav-icon color="#eff6ee" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template> -->
        <v-app-bar-title class="appbarTitleColor"><v-btn @click="goToHomeView" :icon="$route.name !== 'home-view' ? 'mdi-arrow-left' : 'mdi-movie'" class="iconMovieColor mb-1" variant="plain"></v-btn><strong>Big Movie DB</strong></v-app-bar-title>
        <!-- <template v-if="(!mdAndUp && isHomeView)" v-slot:extension>
            <TabsSelectMovieCategory />
        </template> -->
        <!-- <template v-if="!mdAndUp" v-slot:extension>
            <TabsSelectMovieCategory :arrayGenresCategories="getterGenresCategories" />
        </template> -->
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        color="#273043"
        floating
        permanent
        theme="dark"
    >
        <v-list-item v-for="item in getterGenresCategories" :key="item.id" prepend-icon="mdi-video-plus-outline"
          :title="item.name"
          color="transparent"
        ></v-list-item>
      </v-navigation-drawer>
</template>

<script>
import { defineAsyncComponent, ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import useMain from '@/modules/main/composables/useMain'

import { useDisplay } from 'vuetify'

export default {
    name: 'Appbar',
    props: {
        isHomeView: {
            type: Boolean,
            requited: true
        }
    },
    components: {
        TabsSelectMovieCategory: defineAsyncComponent(() => import('@/modules/main/components/TabsSelectMovieCategory.vue')), //Cargas pequeñas en cache,
    },
    setup() {

        const { getGenresCategories, getterGenresCategories } = useMain()

        const { mdAndUp } = useDisplay()

        const router = useRouter();

        const drawer = ref(false)
        const group = ref(null)

        onMounted(() => {
          getGenresCategories()
        })

        // Watch
        watch(mdAndUp, (val) => !val ? drawer.value = false : drawer.value = false )

        return {
            drawer,
            group,
            getterGenresCategories,

            getGenresCategories,

            goToHomeView: () => {
                if(router.currentRoute.value.name !== 'home-view') {
                    router.replace({ name: 'home-view' });
                }
            },


            // Breakpoints
            mdAndUp
        }


    }
}
</script>

<style scoped>
.appbarTitleColor {
    color: #fff;
}
.iconMovieColor {
    color: #fff;
}
</style>