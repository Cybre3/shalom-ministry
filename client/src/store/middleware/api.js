import axios from 'axios';
// import { toast } from 'react-toastify';

import * as actions from '../api';

// axios.interceptors.response.use(null, (error) => {
//   const expectedError =
//     error.response && error.response.status >= 400 && error.response.status <= 500;

//   if (!expectedError) {
//     return toast.error('An unexpected error has occured.');
//   }

//   return Promise.reject({ status: error.message, message: error.response.data });
// });

const api =
  ({ dispatch }) =>
    (next) =>
      async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } = action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
          const response = await axios.request({
            baseURL: process.env.REACT_APP_API_URL,
            url,
            method,
            data,
          });
          
          dispatch(actions.apiCallSuccess(response.data));
          if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
        } catch (error) {
          dispatch(actions.apiCallFailed(error.message));
          if (onError) dispatch({ type: onError, payload: error.message });
        }
      };

export default api;
