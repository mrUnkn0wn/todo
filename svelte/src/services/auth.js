
import { restUrl } from '../config';

export default class AuthService {
  static login (username, password) {
    return fetch(`${restUrl}/auth/login?username=${username}&&password=${password}`);
  }

  static async auth () {
    try {
      const response = await fetch(`${restUrl}/auth`);

      return response.status === 200;
    } catch (e) {
      return false;
    }
  }

  static async logout () {
    return fetch(`${restUrl}/auth/logout`);
  }
}