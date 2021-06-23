import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={Styles.Logo}>
      <NavLink
        to="/"
        exact={false}
      >
                Logo
      </NavLink>
    </div>
  );
};
