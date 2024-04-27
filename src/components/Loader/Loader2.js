import React from 'react';
import styles from './component.module.css';

const Loader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
