import http from './httpService';

const apiEndpoint = '/tickets';

function ticketUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getCwatTicketTypes() {
  return http.get(ticketUrl('cwat-tickets'))
}

export function getCwatUnregistrarTicket(ticketCode) {
  return http.get(ticketUrl(`cwat-unregistered/${ticketCode}`));
}

