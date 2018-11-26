import axios from "axios";
import getConfig from 'next/config'
import store from '../store.js';

import { authSuccess, authFailed } from '../actions/auth-actions.js';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const restUrl = serverRuntimeConfig && serverRuntimeConfig.restUrl || publicRuntimeConfig.restUrl;

export function auth(headers) {
    let options;

    if (headers) {
        options = { headers };
    }

    return axios.get(`${restUrl}/auth`, options).then(() => {
        store.dispatch(authSuccess());
    }).catch((error) => {
        store.dispatch(authFailed());
    });
}

export function login(params) {
    return axios.get(`${restUrl}/auth/login`, { params:params }).then(() => {
        store.dispatch(authSuccess());
    }).catch((error) => {
        store.dispatch(authFailed());
        throw error;
    });
}

export function logout(params) {
    return axios.get(`${restUrl}/auth/logout`, { params:params }).then(() => {
        store.dispatch(authFailed());
    });
}
