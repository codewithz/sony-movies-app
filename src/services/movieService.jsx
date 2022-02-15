import http from "./HttpService";
import config from '../config.json';


const { apiEndPoint } = config;
const tag = "movies";

const urlBuilder = (movieId) => {
    return `${apiEndPoint}${tag}/${movieId}`;
}

export function getMovies() {

    return http.get(apiEndPoint + tag);

}

export function getMovie(movieId) {

    const url = urlBuilder(movieId);
    return http.get(url);
}

export function saveMovie(movie) {

}

export function deleteMovie(movieId) {
    const url = urlBuilder(movieId);
    return http.delete(url);
}
