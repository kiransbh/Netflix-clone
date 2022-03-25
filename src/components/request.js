const requests = {
    fetchTrending:'/trending/all/week?api_key=42dfe3302a9eea97585f77ee69b86f95&language=en-US',
    fetchNetflixOriginals:'/discover/tv?api_key=42dfe3302a9eea97585f77ee69b86f95&with_networks=123',
    fetchTopRated:'/movie/top_rated?api_key=42dfe3302a9eea97585f77ee69b86f95&language=en-us',
    fetchActionMovies:'/discover/tv?api_key=42dfe3302a9eea97585f77ee69b86f95&with_genres=28',
    fetchComedyMovies:'/discover/tv?api_key=42dfe3302a9eea97585f77ee69b86f95&with_genres=35',
    fetchHorrorMovies:'/discover/tv?api_key=42dfe3302a9eea97585f77ee69b86f95&with_genres=27',
    fetchRomanceMovies:'/discover/tv?api_key=42dfe3302a9eea97585f77ee69b86f95&with_genres=10749',
    fetchDocumentries:'/discover/tv?api_key=42dfe3302a9eea97585f77ee69b86f95&with_genres=99',
}

export default requests