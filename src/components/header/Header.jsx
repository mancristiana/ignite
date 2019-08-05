import React from 'react';
import styles from './Header.module.css';

const Header = ({ children, size = 50}) => (
  <div className={styles.header} style={{fontSize: size}}>
    {children}
  </div>
);

export default Header;
