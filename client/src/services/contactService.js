import http from '../services/httpService';


const apiEndpoint = '/contact-us';

function contactUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getAllContacts() {
  return http.get(apiEndpoint);
}

export function saveContact(contact) {
  if (contact._id) {
    const body = { ...contact };
    delete body._id;
    return http.put(contactUrl(contact._id), body);
  }

  return http.post(apiEndpoint, contact);
}