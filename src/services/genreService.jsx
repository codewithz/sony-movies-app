import http from './HttpService';
import config from '../config.json';

const { apiEndPoint } = config;

export function getGenres() {

    return http.get(apiEndPoint + "genres");

}