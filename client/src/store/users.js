import { createSelector, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import moment from 'moment';

import { apiCallBegan } from './api';
// import { toast } from 'react-toastify';


const slice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    loggedIn: []
  },
  reducers: {
    createUserRequest: (users, action) => {
      users.loading = true;
    },

    createUserRequestFailed: (users, action) => {
      users.loading = false;
    },

    userLoginRequest: (users, action) => {
      users.loading = true;
    },

    usersRquested: (users, action) => {
      users.loading = true;
    },

    usersRequestFailed: (users, action) => {
      users.loading = false;
    },

    userLoggedIn: (users, action) => {
      const { userId, userEmail, token } = action.payload;

      localStorage.setItem('token', token);
      users.loggedIn.push({ userId, userEmail });

      users.loading = false;
    },

    userLoginFailed: (users, action) => {
      users.loading = false;
    },

    usersReceived: (users, action) => {
      users.list = action.payload;
      users.loading = false;
      users.lastFetch = Date.now();
    },

    userAdded: (users, action) => {
      users.list.push(action.payload);
      users.loading = false;
    },
  },
});

const { usersRquested, usersReceived, usersRequestFailed, userAdded, createUserRequest, createUserRequestFailed, userLoginRequest, userLoginFailed, userLoggedIn } = slice.actions;
export default slice.reducer;

// Action Creators

const url = '/users';

export const loadUsers = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.users;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: usersRquested.type,
      onSuccess: usersReceived.type,
      onError: usersRequestFailed.type,
    })
  );
};

export const addUser = (user) => {
  return apiCallBegan({
    url,
    method: 'post',
    data: _.omit(user, 'basicInfo.rePassword'),
    onStart: createUserRequest.type,
    onSuccess: userAdded.type,
    onError: createUserRequestFailed.type
  });
};

export const loginUser = data => {
  return apiCallBegan({
    url: '/auth',
    method: 'post',
    data,
    onStart: userLoginRequest.type,
    onSuccess: userLoggedIn.type,
    onError: userLoginFailed.type
  });
}

// selectors
export const getUserById = (userId) =>
  createSelector(
    (state) => state.entities.users.list,
    (users) => users.list.filter((user) => user.userId === userId)
);