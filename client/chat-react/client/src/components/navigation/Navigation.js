import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Nav.module.css';

const links = [
  {to: '/chat', label: 'Chat', exact: false},
  {to: '/auth', label: 'Auth', exact: false},
  {to: '/about', label: 'About', exact: false},
];

const renderLinks = () => {
  return links.map((link, index) => {
    return (
      <li key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
        >
          {link.label}
        </NavLink>
      </li>
    );
  });
};

export const Navigation = () => {
  return (
    <nav className={Styles.Nav}>
      <ul>
        { renderLinks() }
      </ul>
    </nav>
  );
};
