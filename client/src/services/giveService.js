import http from '../services/httpService';

const apiEndpoint = '/give';

function contactUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getAllSponsors() {
  return http.get(apiEndpoint);
}

export function saveSponsor(sponsor) {
  if (sponsor._id) {
    const body = { ...sponsor };
    delete body._id;
    return http.put(contactUrl(sponsor._id), body);
  }

  return http.post(apiEndpoint, sponsor);
}
