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

    if (movie._id) {
        const url = urlBuilder(movie._id);
        const body = { ...movie };
        delete body._id;
        return http.put(url, body);
    }

    return http.post(apiEndPoint + tag, movie);
}

export function deleteMovie(movieId) {
    const url = urlBuilder(movieId);
    return http.delete(url);
}
