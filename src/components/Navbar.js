import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">Dynamic form</div>
    <div className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">Adding form fields</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/edit" className="nav-link">Editing form fields</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/fields" className="nav-link">Form field values</NavLink>
      </li>
    </div>
  </nav>
);
