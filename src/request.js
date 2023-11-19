const Api_Key = "c16404625b06e441f70d86ca4622621d";

const request = {
  fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
};

export default request;

//https://www.themoviedb.org/3/trending/all/week?api_key=c16404625b06e441f70d86ca4622621d&language=en-US
