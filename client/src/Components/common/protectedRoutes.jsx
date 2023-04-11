import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import auth from '../../services/authService';

const ProtectedRoutes = () => {
  return !auth.getCurrentUser() ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoutes;
