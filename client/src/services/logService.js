import { toast } from 'react-toastify';

function init() {}

function log(error) {
  toast.error(error.response.data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  init,
  log,
};
