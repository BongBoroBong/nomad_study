const API_KEY = 'dd4ff7d79b5c3ffedb23171994acccae';
const ORG_BASE_URL = `https://api.coinpaprika.com/v1`;
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchCoins() {
  return fetch(`${ORG_BASE_URL}/coins`).then(response => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${ORG_BASE_URL}/coins/${coinId}`).then(response => response.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${ORG_BASE_URL}/tickers/${coinId}`).then(response => response.json());
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;

  return fetch(
    `${ORG_BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`,
  ).then(response => response.json());
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMoviesResult[];
  total_pages: number;
  total_results: number;
}

export interface IMoviesResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export function getMovies() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(response =>
    response.json(),
  );
}
