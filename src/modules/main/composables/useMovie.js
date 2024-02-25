import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useQuery } from '@tanstack/vue-query'

const getMovieById = async ( store, idMovie ) => {
    const resp = await store.dispatch('mainModule/getActionMovieDetails', idMovie)
    return resp
}

const useMovie = ( id ) => {

    const store = useStore()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['movie', id ],
        queryFn: () => getMovieById( store, id ),
        retry: false // Si falla la petición, no reintenta hacer la peticion y da el fallo en el momento
    })

    watch( data, (movie) => {
        if(movie) {
            store.commit('mainModule/mutationMovieDetails', movie)
            //store.setClients( clientsWatch ) // Estas movies se setean asi (en vez de pasar el data directamente o retornar directamente el data para mantener los archivos independientes y el patron Adapter)
        }
    }, { immediate: true })

    watch( isLoading, (charging) => { 
        store.commit('mainModule/mutationIsPageLoadingStatus', charging)
    }, { immediate: true })

    return {
        isError,
        getterMovieDetails: computed(() => store.getters['mainModule/getterMovieDetails']), //Los getters son un objeto, por eso las llaves getters[]
    }

}

export default useMovie