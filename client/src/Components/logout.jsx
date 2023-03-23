import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../services/authService';

class Logout extends Component {
  componentDidMount() {
    auth.logout();

    window.location = '/';
  }

  render() {
    return <Navigate to="/" />;
  }
}

export default Logout;
