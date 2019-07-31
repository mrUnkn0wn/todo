import { axios } from '@bundled-es-modules/axios';

export default new class AuthService {
  login (params) {
    return axios.get(`${AppGlobals.restUrl}/auth/login`, { params })
  }

  auth () {
    return axios.get(`${AppGlobals.restUrl}/auth`);
  }
};
