import http from './HttpService';
import config from '../config.json';

const { apiEndPoint } = config;

const tag = "auth";

export function login(email, password) {
    const url = apiEndPoint + tag;
    return http.post(url, { email, password });
}
