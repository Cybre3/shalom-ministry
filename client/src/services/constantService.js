import http from '../services/httpService';

const apiEndpoint = '/constants';

function endpointUrl(url) {
  return `${apiEndpoint}/${url}`;
}

export function getAllConstants() {
  return http.get(apiEndpoint);
}

export function getConstant(type) {
  return http.get(endpointUrl(type));
}