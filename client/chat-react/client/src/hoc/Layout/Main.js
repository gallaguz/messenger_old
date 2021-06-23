import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Main.module.css';

export const Main = (props) => {
  return (
    <>
      <header className={Styles.header}>{ props.header }</header>
      <main className={Styles.main}>{ props.children }</main>
      <footer className={Styles.footer}>{ props.footer }</footer>
    </>
  );
};

Main.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
