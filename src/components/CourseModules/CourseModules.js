import React, { useState } from 'react';
import { alfaSlabOne, inter } from '@/app/main/page';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

const CourseModules = () => {
  const { activeModule, setActiveModule } = useMainContext();
  return (
    <div>
      <div
        className={alfaSlabOne.className}
        style={{
          fontSize: '50px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}>
        <div style={{ color: '#FE8863' }}>Courses</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <div
          style={{ display: 'flex', borderRadius: '46px', justifyContent: 'space-between' }}
          className="selector_main">
          <button
            style={{
              backgroundColor: activeModule === 1 ? '#A2BF00' : '#fff',
              borderRadius: '46px',
              border: 'none',
              color: activeModule === 1 ? '#fff' : '#FE8863',
              width: '140px',
              height: '60px',
              fontWeight: '400',
              fontSize: '18px',
            }}
            onClick={() => setActiveModule(1)}
            className={inter.className}>
            Module 1
          </button>
          <button
            style={{
              backgroundColor: activeModule === 2 ? '#A2BF00' : '#fff',
              borderRadius: '46px',
              border: 'none',
              color: activeModule === 2 ? '#fff' : '#FE8863',
              width: '140px',
              height: '60px',
              fontWeight: '400',
              fontSize: '18px',
            }}
            onClick={() => setActiveModule(2)}>
            Module 2
          </button>
          <button
            style={{
              backgroundColor: activeModule === 3 ? '#A2BF00' : '#fff',
              borderRadius: '46px',
              border: 'none',
              color: activeModule === 3 ? '#fff' : '#FE8863',
              width: '140px',
              height: '60px',
              fontWeight: '400',
              fontSize: '18px',
            }}
            onClick={() => setActiveModule(3)}>
            Module 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModules;
