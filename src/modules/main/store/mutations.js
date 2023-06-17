export const mutationBrandNewMovies = (state, arrayBrandNewMovies) => {

    state.arrayBrandNewMovies = arrayBrandNewMovies

}

export const mutationMovieDetails = (state, objectMovieDetails) => {

    state.movieDetails = objectMovieDetails

}

export const mutationGenresCategories = (state, arrayGenresCategories) => {

    state.arrayGenresCategories = [...state.arrayGenresCategories, ...arrayGenresCategories]

}

export const mutationIsPageLoadingStatus = (state, status) => {

    state.isPageLoading = status

}