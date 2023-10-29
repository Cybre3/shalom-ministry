import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
// import logger from './middleware/logger';
import errorToast from './middleware/toast';
import api from './middleware/api';
import secure from './middleware/secure';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorToast).concat(secure).concat(api),
  });
}
/* 
(getDefaultMiddleware) => getDefaultMiddleware().concat(errorToast).concat(api)
.concat(auth)
[
      ...getDefaultMiddleware(), 
      // logger({ destination: 'Console' }), 
      toast, 
      api
    ],
*/