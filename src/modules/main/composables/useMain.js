import { computed } from "vue"
import { useStore } from "vuex"

const useMain = () => {

    const store = useStore()

    const getActionMovies = async () => {
        const resp = await store.dispatch('mainModule/getActionMovies')
        return resp
    }

    const getActionMovieDetails = async (idMovie) => {
        const resp = await store.dispatch('mainModule/getActionMovieDetails', idMovie)
        return resp
    }

    const getGenresCategories = async () => {
        await store.dispatch('mainModule/getGenresCategories')
        // return resp
    }

    const setMutationIsPageLoadingStatus = ( status ) => {
        store.commit('mainModule/mutationIsPageLoadingStatus', status)
    }

    return {

        getActionMovies,
        getActionMovieDetails,
        getGenresCategories,
        setMutationIsPageLoadingStatus,

        getterMovies: computed(() => store.getters['mainModule/getterMovies']), //Los getters son un objeto, por eso las llaves getters[]
        getterIsPageLoading: computed(() => store.getters['mainModule/getterIsPageLoading']), //Los getters son un objeto, por eso las llaves getters[]
        getterMovieDetails: computed(() => store.getters['mainModule/getterMovieDetails']), //Los getters son un objeto, por eso las llaves getters[]
        getterGenresCategories: computed(() => store.getters['mainModule/getterGenresCategories']), //Los getters son un objeto, por eso las llaves getters[]
        getterSelectedCategory: computed(() => store.getters['mainModule/getterSelectedCategory']), //Los getters son un objeto, por eso las llaves getters[]
    }

}


export default useMain