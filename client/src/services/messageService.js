import http from './httpService';


const apiEndPoint = '/messages';

export function getAllMessages() {
  return http.get(apiEndPoint)
}