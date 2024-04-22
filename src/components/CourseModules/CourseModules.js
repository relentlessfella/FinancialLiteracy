import React, { useState, useEffect } from 'react';
import { alfaSlabOne, inter } from '@/app/main/page';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import styles from './component.module.css';

const CourseModules = ({
  modules,
  width,
  activeModule,
  setActiveModule,
  backgroundColor,
  mobileWidth,
}) => {
  const useResponsiveWidth = () => {
    const [width, setWidth] = useState(null);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
  };
  const screenWidth = useResponsiveWidth(); // Custom hook to get width
  const isMobile = screenWidth < 768;
  console.log(screenWidth);
  return (
    <div style={{ textAlign: 'center' }} className={`${''} ${alfaSlabOne.variable}`}>
      <ul
        className={styles.main}
        style={{
          width: isMobile ? `${mobileWidth}px` : `${width}px`,
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
