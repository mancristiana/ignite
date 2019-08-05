import React from 'react';
import styles from './Image.module.css';
import image from './../../bg.png';

const Image = () => {
  return <img src={image} className={styles.image} alt="logo" />;
};

export default Image;
