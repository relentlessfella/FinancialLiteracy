import React from 'react';
import styles from './component.module.css';

const Loader = () => {
  return (
    <div style={{ marginTop: '250px' }}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
