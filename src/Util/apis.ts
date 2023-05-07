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
  title?: string;
  name?: string;
  first_air_date?: string;
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
    const response = await axios.get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko&page=1`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPopMovies = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko&page=2`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRateMovies = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko&page=5`);
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

export const getRateTv = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=ko`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAirTv = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=ko`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const getPopTv = async () => {
  try {
    const response = await axios.get(`${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=ko&page=2`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSearch = async (search: string) => {
  try {
    const encodedSearch = encodeURIComponent(search); // 검색어를 URL-safe한 형태로 인코딩
    const response = await axios.get(`${BASE_PATH}/search/multi?api_key=${API_KEY}&query=${encodedSearch}&include_adult=false&language=ko&page=1`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
