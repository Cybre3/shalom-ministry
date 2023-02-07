import http from '../services/httpService';

const apiEndpoint = '/invoices/';

function invoiceUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getAllInvoices() {
  return http.get(apiEndpoint);
}

export function getInvoice(invoiceId) {
  return http.get(invoiceUrl(invoiceId));
}

export function saveInvoice(invoice) {
  if(invoice._id) {
    const body = { ...invoice };
    delete body._id;
    return http.put(invoiceUrl(invoice._id), body);
  }

  return http.post(apiEndpoint, invoice);
}

export function deleteInvoice(invoiceId) {
  return http.delete(invoiceUrl(invoiceId));
}
