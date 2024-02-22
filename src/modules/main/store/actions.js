import tmdbAPI from "@/api/tmdbAPI";

const getMoviesByPage = async( page = 1 ) => {
    try {
        const { data } = await tmdbAPI.get('/movie/now_playing', {
            params: {
                page
            }
        })

        // const { data } = await tmdbAPI.get('/discover/movie', {
        //     params: {
        //         include_adult: false,
        //         include_video: false,
        //         page
        //     }
        // })

        data.results = data.results.map( movie => {
            if( !movie.poster_path ) {
                movie.poster_path = `https://res.cloudinary.com/flutter-app-camera/image/upload/v1708572427/No-Image-Placeholder_z28aiv.svg`
            }
            else {
                movie.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`
            }
            return movie
        })
        
        return data;
    } catch (error) {
        throw { ok: false, message: 'Ha ocurrido un error' }
    }
}

export const getActionMovies = async ({ commit }, pageNumber) => {

    try {

        const data = await getMoviesByPage( pageNumber ); // Por default la pagina 1
        commit('mutationMovies', data)
        commit('mutationPaginationPage', pageNumber) 
        commit('mutationIsPageLoadingStatus', false) 

        return { ok: true, message: 'Peliculas obtenidas con exito' }

    } catch (error) {
        return error

    }
}

export const getActionMovieDetails = async ({ commit }, idMovie) => {

    //TODO: Implementar VueQuery
    //TODO: Conservar el numero de pagina en el store
    //TODO: Arreglar la alineacion y el espaciado de texto

    try {

        const respMovieDetails = await tmdbAPI.get(`/movie/${idMovie}`)
        const respMoveCast = await tmdbAPI.get(`/movie/${idMovie}/credits`)

        if( !respMovieDetails.data.poster_path ) {
            respMovieDetails.data.poster_path = `https://res.cloudinary.com/flutter-app-camera/image/upload/v1708572427/No-Image-Placeholder_z28aiv.svg`
        }
        else {
            respMovieDetails.data.poster_path = `https://image.tmdb.org/t/p/original${respMovieDetails.data.poster_path}`
        }

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
            if( !profile.poster_path ) {
                profile.poster_path = `https://res.cloudinary.com/flutter-app-camera/image/upload/v1708572427/No-Image-Placeholder_z28aiv.svg`
            }
            else {
                profile.poster_path = `https://image.tmdb.org/t/p/original${profile.poster_path}`
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