import { computed, toRef } from 'vue'
import { useStore } from 'vuex'
import { useQuery } from '@tanstack/vue-query'

const getMoviesByPage = async ( store, pageNumber = 1 ) => {
    const resp = await store.dispatch('mainModule/getActionMovies', pageNumber)
    return resp
}

const useMovies = () => {

    const store = useStore()

    const getGenresCategories = async () => {
        await store.dispatch('mainModule/getGenresCategories')
    }

    const pageNumber = toRef(() => store.state['mainModule']['paginationPage']); // Variable reactiva. Ayudará a detectar los cambios para el VueQuery

    useQuery({
        queryKey: ['movies?page=', pageNumber ],
        queryFn: () => getMoviesByPage( store, pageNumber.value ),
        retry: false // Si falla la petición, no reintenta hacer la peticion y da el fallo en el momento
    })

    return {

        getGenresCategories,

        getterMovies: computed(() => store.getters['mainModule/getterMovies']), //Los getters son un objeto, por eso las llaves getters[]
        getterGenresCategories: computed(() => store.getters['mainModule/getterGenresCategories']), //Los getters son un objeto, por eso las llaves getters[]
        getterSelectedCategory: computed(() => store.getters['mainModule/getterSelectedCategory']), //Los getters son un objeto, por eso las llaves getters[]
    }

}

export default useMovies