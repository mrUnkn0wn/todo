import axios from "axios";

import {restUrl} from '../config';
import store from '../store';

import { authSuccess, authFailed } from '../actions/auth-actions';

export function auth() {
    return axios.get(`${restUrl}/auth`).then(() => {
        store.dispatch(authSuccess());
    }).catch(() => {
        store.dispatch(authFailed());
    });
}

export function login(params) {
    return axios.get(`${restUrl}/auth/login`, { params:params }).then(() => {
        store.dispatch(authSuccess());
    }).catch(() => {
        store.dispatch(authFailed());
    });
}

export function logout(params) {
    return axios.get(`${restUrl}/auth/logout`, { params:params }).then(() => {
        store.dispatch(authFailed());
    });
}
