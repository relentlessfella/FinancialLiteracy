import React from 'react';
import style from './component.module.css';
import { useFetchUser } from '@/contexts/authContext/authContext';
import { getUserFromLocalCookie } from '@/lib/auth';
const ProfileForm = () => {
  const { user, loading } = useFetchUser();
  const { username, email } = getUserFromLocalCookie();
  if (!user && !loading) {
    return router.push('/login');
  }
  return (
    <div className={style.profileFormMain}>
      <div
        style={{
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
            placeholder={user ? username : ''}
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
            placeholder={user ? email : ''}
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
            placeholder="Your age.."
            type="text"
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
