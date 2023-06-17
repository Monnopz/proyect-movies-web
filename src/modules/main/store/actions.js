import tmdbAPI from "@/api/tmdbAPI";

export const getActionBrandNewMovies = async ({ commit }) => {

    try {

        const { data } = await tmdbAPI.get('/movie/now_playing')

        commit('mutationBrandNewMovies', data.results) 
        commit('mutationIsPageLoadingStatus', false) 

        return { ok: true, message: 'Peliculas obtenidas con exito' }

    } catch (error) {
        
        return { ok: false, message: 'Ha ocurrido un error' }

    }
}

export const getActionMovieDetails = async ({ commit }, idMovie) => {

    try {

        const respMovieDetails = await tmdbAPI.get(`/movie/${idMovie}`)
        const respMoveCast = await tmdbAPI.get(`/movie/${idMovie}/credits`)

        respMovieDetails.data.cast = respMoveCast.data.cast

        commit('mutationMovieDetails', respMovieDetails.data) 
        commit('mutationIsPageLoadingStatus', false) 

        return { ok: true, message: 'Peliculas obtenidas con exito' }

    } catch (error) {
        
        return { ok: false, message: 'Ha ocurrido un error' }

    }
}

export const getGenresCategories = async ({ commit }) => {

    try {

        const { data } = await tmdbAPI.get('/genre/movie/list')

        commit('mutationGenresCategories', data.genres) 

        return { ok: true, message: 'Peliculas obtenidas con exito' }

    } catch (error) {
        
        return { ok: false, message: 'Ha ocurrido un error' }

    }
}