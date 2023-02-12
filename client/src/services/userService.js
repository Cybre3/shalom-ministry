import http from '../services/httpService';

const apiEnpoint = '/users';

export function register(user) {
  http.post(apiEnpoint, {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    discover: user.discover,
  });
}
