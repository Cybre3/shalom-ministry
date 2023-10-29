import http from '../services/httpService';
import _ from 'lodash';
// import { toast } from 'react-toastify';

const apiEndpoint = '/users';

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function register(user) {
  return http.post(apiEndpoint, _.omit(user, 'basicInfo.rePassword'));
}

export function updateUser(id, data) {
  return http.put(userUrl(id), data);
}


// export function saveUser(user) {
//   if (user._id) {
//     const body = { ...user };
//     delete body._id;
//     return [http.put(userUrl(user._id), body), toast.success(`User ${user.userNumber} updated!`)];
//   }

//   return [
//     http.post(apiEndpoint, _.omit(user, 'rePassword')),
//     toast.success(`Registration Complete!`),
//   ];
// }
