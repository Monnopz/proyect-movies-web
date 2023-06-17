import axios from "axios"

const tmdbAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '597006ee0bd4525010947643595a5a8a',
        language: 'es-ES'
    }
})

// console.log( process.env.NODE_ENV ) // test durante testing

export default tmdbAPI