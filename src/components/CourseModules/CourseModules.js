import React, { useState } from 'react';
import { alfaSlabOne, inter } from '@/app/main/page';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import styles from './component.module.css';

const CourseModules = () => {
  const { activeModule, setActiveModule } = useMainContext();
  const modules = [
    { id: 1, title: 'Module 1' },
    { id: 2, title: 'Module 2' },
    { id: 3, title: 'Module 3' },
  ];
  return (
    <div style={{ textAlign: 'center' }} className={`${inter.variable} ${alfaSlabOne.variable}`}>
      <p className={styles.title}>Courses</p>
      <ul className={styles.main}>
        {modules.map((item) => (
          <li
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
