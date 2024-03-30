import React, { useState } from 'react';
import { alfaSlabOne, inter } from '@/app/main/page';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import styles from './component.module.css';

const CourseModules = ({ modules, width, activeModule, setActiveModule, backgroundColor }) => {
  return (
    <div style={{ textAlign: 'center' }} className={`${''} ${alfaSlabOne.variable}`}>
      <ul
        className={styles.main}
        style={{
          width: `${width}px`,
          backgroundColor: backgroundColor,
        }}>
        {modules.map((item) => (
          <li
            key={item.id}
            className={activeModule === item.id ? styles.module_active : styles.module}
            onClick={() => setActiveModule(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseModules;
