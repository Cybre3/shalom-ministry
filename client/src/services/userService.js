import http from '../services/httpService';
import _ from 'lodash';

const apiEndpoint = '/users';


function endpointUrl(url) {
  return `${apiEndpoint}/${url}`;
}

function registrarUrl(id) {
  return `${endpointUrl('cwat-register')}/${id}`;
}


export function getRegistrar(RegistrarId) {
  return http.get(registrarUrl(RegistrarId));
}

export function getAllCWATregistrars() {
  return http.get(endpointUrl('cwat-register'));
}

export function register(user) {
  return http.post(apiEndpoint, _.omit(user, 'rePassword'));
}

export function CWATregister(user) {
  return http.post(endpointUrl('cwat-register'), user);
}



export function deleteRegistrar(registrarId) {
  return http.delete(registrarUrl(registrarId));
}