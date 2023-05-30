import axios from 'axios';

class MovieAPI {
  constructor(apiKey = 'cb85d4ca8ccc21148aa431fcbda6fed6') {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.themoviedb.org/3';
    this.headers = {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjg1ZDRjYThjY2MyMTE0OGFhNDMxZmNiZGE2ZmVkNiIsInN1YiI6IjY0NzA5MTAwMTNhMzIwMDExNmI2OTljZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.elM55nFlhNCZrZUR2Hlm6sqxpk_Q0C6eFSXrdeKsuk8`,
    };
  }

  async fetchMovieReviews(movieId, page = 1) {
    try {
      const response = await axios.get(
        `${this.baseURL}/movie/${movieId}/reviews?language=en-US`,
        {
          params: { page },
          headers: this.headers,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchMovieCredits(movieId) {
    try {
      const response = await axios.get(
        `${this.baseURL}/movie/${movieId}/credits?language=en-US`,
        {
          headers: this.headers,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchMovieDetails(movieId) {
    try {
      const response = await axios.get(
        `${this.baseURL}/movie/${movieId}?language=en-US`,
        {
          headers: this.headers,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async searchMovies(query, page = 1) {
    try {
      const response = await axios.get(
        `${this.baseURL}/search/movie?include_adult=false&language=en-US`,
        {
          params: { query, page },
          headers: this.headers,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchTrendingMovies() {
    try {
      const response = await axios.get(
        `${this.baseURL}/trending/all/day?language=en-US`,
        {
          headers: this.headers,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default MovieAPI;
