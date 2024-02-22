export const mutationMovies = (state, arrayMovies) => {

    state.arrayMovies = arrayMovies

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

export const mutationPaginationPage = (state, pageNumber) => {

    state.paginationPage = pageNumber

}