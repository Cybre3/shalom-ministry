import { createSlice } from '@reduxjs/toolkit';
// import _ from 'lodash';
// import moment from 'moment';

import { apiCallBegan } from './api';
// import { toast } from 'react-toastify';


const slice = createSlice({
  name: 'emails',
  initialState: {
    list: [],
    messagesSentList: [],
    loading: false,
    lastFetch: null,
    loggedIn: []
  },
  reducers: {
    emailsRquested: (emails, action) => {
      emails.loading = true;
    },

    emailsRequestFailed: (emails, action) => {
      emails.loading = false;
    },

    emailsReceived: (emails, action) => {
      emails.list = action.payload;
      emails.loading = false;
      emails.lastFetch = Date.now();
    },

    emailAdded: (emails, action) => {
      emails.list.push(action.payload);
      emails.loading = false;
    },

    emailRemoved: (emails, action) => {
      emails.list.filter((email) => email._id !== action.payload.id);
    },

    emailBlastSent: (emails, action) => {
      emails.messagesSentList.push(action.payload) // give obj id
    }
  },
});

const { emailAdded, emailsReceived, emailsRequestFailed, emailsRquested, emailRemoved, emailBlastSent } = slice.actions;
export default slice.reducer;

// Action Creators

const url = '/emails';

export const loadEmails = () => (dispatch, getState) => {
  //   const { lastFetch } = getState().entities.emails;

  //   const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

  //   if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: emailsRquested.type,
      onSuccess: emailsReceived.type,
      onError: emailsRequestFailed.type,
    })
  );
};

export const addEmail = (emailInfo) => {
  return apiCallBegan({
    url,
    method: 'post',
    data: emailInfo,
    onSuccess: emailAdded.type,
  });
};

export const removeEmail = (emailID) =>
  apiCallBegan({
    url: `${url}/${emailID}`,
    method: 'delete',
    data: {emailID},
    onSuccess: emailRemoved.type,
  });

export const sendEmailBlast = (emailInfo) =>
  apiCallBegan({
    url: `${url}/blast`,
    method: 'post',
    data: emailInfo,
    onSuccess: emailBlastSent.type
  });

// selectors
// export const getUserById = (userId) =>
//   createSelector(
//     (state) => state.entities.users.list,
//     (users) => users.list.filter((user) => user.userId === userId)
// );