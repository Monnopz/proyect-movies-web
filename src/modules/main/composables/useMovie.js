import { computed } from 'vue'
import { useStore } from 'vuex'
import { useQuery } from '@tanstack/vue-query'

const getMovieById = async ( store, idMovie ) => {
    const resp = await store.dispatch('mainModule/getActionMovieDetails', idMovie)
    return resp
}

const useMovie = ( id ) => {

    const store = useStore()

    const { isError } = useQuery({
        queryKey: ['movie', id ],
        queryFn: () => getMovieById( store, id ),
        retry: false // Si falla la petición, no reintenta hacer la peticion y da el fallo en el momento
    })

    return {
        isError,
        getterMovieDetails: computed(() => store.getters['mainModule/getterMovieDetails']), //Los getters son un objeto, por eso las llaves getters[]
    }

}

export default useMovie