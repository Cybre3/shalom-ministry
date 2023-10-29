import http from './httpService';

const apiEndpoint = '/registrars';

function endpointUrl(url) {
  return `${apiEndpoint}/${url}`;
}

function getRegistrarByIdUrl(route, id) {
  return `${endpointUrl(route)}/${id}`;
}

// function getRegistrarByEmailUrl(route, email) {
//   return `${endpointUrl(route)}/${email}`;
// }

export function getAllRegistrars() {
  return http.get(apiEndpoint);
}

export function getCWATregistrarById(RegistrarId) {
  return http.get(getRegistrarByIdUrl('cwat-register', RegistrarId));
}

export function getUserEvents(email) {
  return http.get(endpointUrl(email))
}

export function getAllCWATregistrars() {
  return http.get(endpointUrl('cwat-register'));
}

export function saveRegistrar(route, registrar) {
  if(registrar._id) {
    const body = { ...registrar };
    delete body._id;
    return http.put(getRegistrarByIdUrl(route, registrar._id), body);
  }
  return http.post(endpointUrl(route), registrar);
}

export function deleteRegistrarById(route, registrarId) {
  return http.delete(endpointUrl(`${route}/${registrarId}`));
}

//6407cd6571ef02db0a6f75e0