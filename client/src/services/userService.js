import http from '../services/httpService';

const apiEndpoint = '/users';

function endpointUrl(url) {
  return `${apiEndpoint}/${url}`;
}

export function register(user) {
  return http.post(apiEndpoint, {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    discover: user.discover,
  });
}

export function CWATregister(user) {
 return http.post(endpointUrl('cwat-register'), user);
}