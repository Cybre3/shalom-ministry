import http from '../services/httpService';

const apiEndpoint = '/users';


function endpointUrl(url) {
  return `${apiEndpoint}/${url}`;
}

function registrarUrl(id) {
  return `${endpointUrl('cwat-register')}/${id}`;
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

export function getAllCWATregistrars() {
  return http.get(endpointUrl('cwat-register'));
}


export function deleteRegistrar(registrarId) {
  return http.delete(registrarUrl(registrarId));
}