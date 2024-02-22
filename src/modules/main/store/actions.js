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

        respMovieDetails.data.cast = respMoveCast.data.cast.map( profile => {
            // if( !profile.profile_path ) {
            //     if( profile.gender === 1 ) { // Female
            //         profile.profile_path = 'https://res.cloudinary.com/flutter-app-camera/image/upload/v1695945456/female-profile_rpjnnn.png'
            //     }
            //     else if( profile.gender === 2 ) { // Male
            //         profile.profile_path = 'https://res.cloudinary.com/flutter-app-camera/image/upload/v1695945456/male-profile_izzjkz.png'
            //     }
            // }
            // else {
            //     profile.profile_path = `https://image.tmdb.org/t/p/original${profile.profile_path}`
            // }
            if( !profile.profile_path ) {
                profile.profile_path = `https://res.cloudinary.com/flutter-app-camera/image/upload/v1708563850/no-profile_hrxndg.png`
            }
            else {
                profile.profile_path = `https://image.tmdb.org/t/p/original${profile.profile_path}`
            }
            return profile
        })

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