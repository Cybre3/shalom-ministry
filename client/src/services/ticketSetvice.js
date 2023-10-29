import http from './httpService';

const apiEndpoint = '/tickets';

function ticketUrl(type) {
  return `${apiEndpoint}/${type}`;
}

export function getCwatTicketTypes() {
  return http.get(ticketUrl('cwat-tickets'));
}

export function getCwatUnregistrarTicket(ticketCode) {
  return http.get(ticketUrl(`cwat-unregistered/${ticketCode}`));
}

export function getCWATticketByTier(tier) {
  return http.get(ticketUrl(`cwat-tickets/${tier}`));
}
