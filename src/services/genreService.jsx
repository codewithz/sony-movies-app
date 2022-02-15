import http from './HttpService';
import config from '../config.json';

const { apiEndPoint } = config;
const tag = "genres";

export function getGenres() {

    return http.get(apiEndPoint + tag);

}