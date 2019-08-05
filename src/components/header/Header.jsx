import React from 'react';
import styles from './Header.module.css';

const Header = ({ children }) => (
  <div className={styles.header}>
    {children}
  </div>
);

export default Header;
