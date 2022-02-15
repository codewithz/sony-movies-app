import http from './HttpService';
import config from '../config.json';

const { apiEndPoint } = config;
const tag = "users";

export function register(user) {

    const url = apiEndPoint + tag;

    return http.post(url, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}