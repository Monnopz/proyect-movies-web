<template>
    <v-overlay
      :persistent="true"
      scrim="#273043"
      :model-value="getterIsPageLoading"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="#87A5E8"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
</template>

<script>
import useMain from '@/modules/main/composables/useMain'


export default {
    name: 'OverlayLoading',
    setup() {

        const { getterIsPageLoading } = useMain()

        return {

            getterIsPageLoading

        }

    }
}
</script>

<style>

</style>