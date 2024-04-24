import React from 'react';
import styles from './component.module.css';
import SideNavigation from '../SideNav/SideNavigation';

const Hamburger = ({ isOpen }) => {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>
      {isOpen && <SideNavigation isOpen={isOpen} />}
      <style jsx>{`
        .burger1 {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0) '};
        }
        .burger2 {
          transform: ${isOpen ? 'translateX(100%)' : 'translateX(0) '};
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0) '};
        }
        .hamburger {
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
        }
        .burger {
          width: 2rem;
          height: 0.25rem;
          border-radius: 10px;
          background-color: ${isOpen ? 'white' : 'black'};
          transform-origin: 1px;
          transition: all 0.3s linear;
        }
      `}</style>
    </>
  );
};

export default Hamburger;
