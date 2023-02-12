import http from '../services/httpService';

const apiEnpoint = '/users';

export function register(user) {
  http.post(apiEnpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    discover: user.discover,
  });
}
