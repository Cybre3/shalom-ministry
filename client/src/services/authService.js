import http from './httpService';

const apiEndpoint = '/auth';
const tokenKey = 'token';

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });

  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
};
