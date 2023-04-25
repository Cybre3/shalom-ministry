import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './dashboard.css';

function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="dash-side-menu">
        <div className="dash-user">
          <img src={require('../../assets/Aboutus/Maya.webp')} alt="" />
          <h2 className="dash-username">Test User</h2>
        </div>

        <div className="dash-sections">
          <div className="dash-section">
            <h3 className="dash-section-title">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </h3>
          </div>

          <div className="dash-section">
            <h3 className="dash-section-title">Forms</h3>

            <NavLink className="nav-link" to="invoices/create-new-invoice">
              Create Invoice
            </NavLink>
            <NavLink className="nav-link" to="invoices/create-new-invoice">
              Thank you Note
            </NavLink>
            <NavLink className="nav-link" to="invoices/create-new-invoice">
              Receipt
            </NavLink>
            <NavLink className="nav-link" to="invoices/create-new-invoice">
              Purchase
            </NavLink>
          </div>

          <div className="dash-section">
            <h3 className="dash-section-title">Admin</h3>
            <NavLink className="nav-link" to="users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="invoices">
              Invoices
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Messages
            </NavLink>
            <NavLink className="nav-link" to="registrars">
              Registrations
            </NavLink>
            <NavLink className="nav-link" to="data">
              Data
            </NavLink>
          </div>
        </div>
      </div>

      <div className="dash-content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
