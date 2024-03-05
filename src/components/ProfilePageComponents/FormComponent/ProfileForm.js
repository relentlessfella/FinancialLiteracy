import React from 'react';
import style from './component.module.css';

const ProfileForm = () => {
  return (
    <div className={style.profileFormMain}>
      <div
        style={{
          // float: 'left',
          textAlign: 'left',
          color: '#9794AA',
        }}>
        <div style={{ margin: '20px 0' }}>
          <div>Full Name</div>
          <input
            style={{
              width: '688px',
              height: '56px',
              borderRadius: '6px',
              border: '1px solid #CBCAD7',
              padding: '0 0 0 10px',
            }}
            placeholder="Nussupekov Arnibek"
            type="text"
          />
        </div>
        <div style={{}}>
          <div>Email Address</div>
          <input
            style={{
              width: '688px',
              height: '56px',
              borderRadius: '6px',
              border: '1px solid #CBCAD7',
              padding: '0 0 0 10px',
            }}
            placeholder="email@gmail.com"
            type="text"
          />
        </div>
        <div style={{ margin: '20px 0' }}>
          <div>Age</div>
          <input
            style={{
              width: '688px',
              height: '56px',
              borderRadius: '6px',
              border: '1px solid #CBCAD7',
              padding: '0 0 0 10px',
            }}
            placeholder="14"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
