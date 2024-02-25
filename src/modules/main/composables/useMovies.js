import { computed, toRef, watch } from 'vue'
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

    const { data, isLoading } = useQuery({
        queryKey: ['movies?page=', pageNumber ],
        queryFn: () => getMoviesByPage( store, pageNumber.value ),
        retry: false // Si falla la petición, no reintenta hacer la peticion y da el fallo en el momento
    })

    // Escuchamos a data para saber si hay que setear el store
    watch( data, (movies) => { // este movies es una nueva variable que se declara en este scope
        if(movies) {
            store.commit('mainModule/mutationMovies', movies)
            //store.setClients( clientsWatch ) // Estas movies se setean asi (en vez de pasar el data directamente o retornar directamente el data para mantener los archivos independientes y el patron Adapter)
        }
    }, { immediate: true })

    watch( isLoading, (charging) => { 
        store.commit('mainModule/mutationIsPageLoadingStatus', charging)
    }, { immediate: true })

    return {

        getGenresCategories,

        getterMovies: computed(() => store.getters['mainModule/getterMovies']), //Los getters son un objeto, por eso las llaves getters[]
        getterGenresCategories: computed(() => store.getters['mainModule/getterGenresCategories']), //Los getters son un objeto, por eso las llaves getters[]
        getterSelectedCategory: computed(() => store.getters['mainModule/getterSelectedCategory']), //Los getters son un objeto, por eso las llaves getters[]
    }

}

export default useMovies