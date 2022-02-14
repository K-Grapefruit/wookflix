const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  popularity: number;
}

interface ITv {
  id: number;
  backdrop_path: string;
  poster_path: string;
  name: string;
  overview: string;
  popularity: number;
  first_air_date: string;
}
export interface IgetTV {
  results: ITv[];
  total_pages: number;
  total_results: number;
}
export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGetMoviesSearch {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

//검색결과 데이터

export function searchMovie(data: string) {
  return fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&language=en-US&query=${data}&page=1&include_adult=false&region=kr`
  ).then((response) => response.json());
}

//TV/onAir

export function getTv() {
  return fetch(
    `${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

//tv/popular

export function getPopularTv() {
  return fetch(
    `${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

//tv/top_rated

export function getToprateTv() {
  return fetch(
    `${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}
