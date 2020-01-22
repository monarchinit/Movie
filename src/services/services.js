import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// https://api.themoviedb.org/3/movie/550?api_key=c4b2dc630692be2fd9ef198af93a75f1

const key = 'c4b2dc630692be2fd9ef198af93a75f1';

export default {
  async getTrendingList() {
    try {
      return await axios.get(`/trending/all/day?api_key=${key}&page=1`);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async searchMovies(word) {
    try {
      return await axios.get(
        `/search/movie?api_key=${key}&query=${word}&language=en-US&page=1&include_adult=false`,
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async getAllInformationMovie(id) {
    try {
      return await axios.get(`/movie/${id}?api_key=${key}&language=en-US`);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async getAllInformationMovieCredits(id) {
    try {
      return await axios.get(`/movie/${id}/credits?api_key=${key}&page=1`);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async getAllInformationMovieReviews(id) {
    try {
      return await axios.get(
        `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  async getAllInformationImage(id) {
    try {
      return await axios.get(
        `https://image.tmdb.org/t/p/original${id}?api_key=${key}`,
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
