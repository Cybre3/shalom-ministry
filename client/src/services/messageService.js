import http from './httpService';


const apiEndPoint = '/messages';

function messageUrl(id, category) {
  return `${apiEndPoint}/${id}/${category}`;
}

export function getAllMessages() {
  return http.get(apiEndPoint)
}

export function getMessageByIdAndCategory(messageId, category) {
  return http.get(messageUrl(messageId, category));
}


export function deleteMessage(messageId, category) {
  return http.delete(messageUrl(messageId, category));
}