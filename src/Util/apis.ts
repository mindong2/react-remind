import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovieResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface IMovie {
  dates: {
    maximum: string;
    minimum: string;
  };
  results: IMovieResult[];
}
export const getMovies = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPopMovies = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRateMovies = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getComeMovies = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=ko`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
