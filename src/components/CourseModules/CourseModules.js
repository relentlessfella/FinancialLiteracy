'use client';
import React, { useState, useEffect } from 'react';
import { alfaSlabOne } from '@/fonts';
import styles from './component.module.css';
import { useMediaQuery } from 'react-responsive';
import { useIsMobile } from '@/configs/axios/isMobile';

const CourseModules = ({
  modules,
  width,
  activeModule,
  setActiveModule,
  backgroundColor,
  mobileWidth,
  moduleStyles,
}) => {
  const isMobile = useIsMobile();
  return (
    <div style={{ textAlign: 'center' }} className={`${''} ${alfaSlabOne.variable}`}>
      <ul
        className={styles.main}
        style={{
          width: isMobile ? `${mobileWidth}px` : `${width}px`,
          backgroundColor: backgroundColor,
          padding: moduleStyles.main.padding,
        }}>
        {modules.map((item) => (
          <li
            key={item.id}
            className={activeModule === item.id ? styles.module_active : styles.module}
            style={isMobile ? moduleStyles.module_active : {}}
            onClick={() => setActiveModule(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseModules;
