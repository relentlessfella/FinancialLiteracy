import React from 'react';
import styles from './component.module.css';

export const Button = ({ children, finished, ...props }) => {
  return (
    <button className={finished === true ? styles.quizButton : styles.button} {...props}>
      {children}
    </button>
  );
};
