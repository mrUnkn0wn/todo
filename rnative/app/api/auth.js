import { restUrl } from '../config';
import store from '../store';

import { authSuccess, authFailed } from '../actions/auth';

export function auth () {
  return fetch(`${restUrl}/auth`).then(() => {
    store.dispatch(authSuccess());
  }).catch((error) => {
    store.dispatch(authFailed());
    throw error;
  });
}

export function login ({ username, password }) {
  const params = `username=${username}&password=${password}`;

  return fetch(`${restUrl}/auth/login?${params}`).then(() => {
    store.dispatch(authSuccess());
  }).catch((error) => {
    store.dispatch(authFailed());
    throw error;
  });
}

export function logout () {
  return fetch(`${restUrl}/auth/logout`).then(() => {
    store.dispatch(authFailed());
  });
}
