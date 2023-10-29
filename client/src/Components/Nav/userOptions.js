import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Logout from '../logout';

export function generateUserOptions(user) {
  const USER_OPTIONS = [
    {
      screen_name: 'Login',
      component: Login,
      path: 'login',
    },
    {
      screen_name: 'Register',
      component: Register,
      path: 'register/new',
    },
    {
      screen_name: 'Dashboard',
      component: Dashboard,
      path: user ? `dashboard/${user._id}/` : '/login',
      needUser: true,
    },
    {
      screen_name: 'Settings',
      component: Dashboard,
      path: user ? `dashboard/${user._id}/settings` : '/login',
      needUser: true,
    },
    {
      screen_name: 'Logout',
      component: Logout,
      path: 'logout',
      needUser: true,
    },
  ];

  return USER_OPTIONS.filter((option) => (user ? option.needUser : !option.needUser));
}
