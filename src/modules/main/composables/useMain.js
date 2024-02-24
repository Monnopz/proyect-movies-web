import { computed, toRef } from 'vue'
import { useStore } from 'vuex'

const useMain = () => {

    const store = useStore()

    const setMutationPaginationPage = ( pageNumber ) => {
        store.commit('mainModule/mutationPaginationPage', pageNumber)
    }

    return {
        setMutationPaginationPage,

        getterMovies: computed(() => store.getters['mainModule/getterMovies']), //Los getters son un objeto, por eso las llaves getters[]
        getterIsPageLoading: computed(() => store.getters['mainModule/getterIsPageLoading']), //Los getters son un objeto, por eso las llaves getters[]
        getterPaginationPage: computed(() => store.getters['mainModule/getterPaginationPage']), //Los getters son un objeto, por eso las llaves getters[]
    }

}

export default useMain