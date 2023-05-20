import http from './httpService';
import jwtDecode from 'jwt-decode';

const apiEndpoint = '/auth';
const tokenKey = 'token';

function authUrl(id) {
  return `${apiEndpoint}/${id}`;
}

http.setJwt(getJwt());

export function getAllUsers() {
  return http.get(apiEndpoint);
}

export function getUserById(userId) {
  return http.get(authUrl(userId));
}

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });

  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function deleteUser(userId) {
  return http.delete(authUrl(userId));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  getAllUsers,
};
