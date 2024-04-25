'use client';
import React, { useState, useEffect } from 'react';
import { alfaSlabOne, inter } from '@/app/main/page';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import styles from './component.module.css';
import { useMediaQuery } from 'react-responsive';

const CourseModules = ({
  modules,
  width,
  activeModule,
  setActiveModule,
  backgroundColor,
  mobileWidth,
}) => {
  const [hideOnMobile, setHideOnMobile] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  useEffect(() => {
    setHideOnMobile(isTabletOrMobile);
  }, [isTabletOrMobile]);
  return (
    <div style={{ textAlign: 'center' }} className={`${''} ${alfaSlabOne.variable}`}>
      <ul
        className={styles.main}
        style={{
          width: hideOnMobile ? `${mobileWidth}px` : `${width}px`,
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
