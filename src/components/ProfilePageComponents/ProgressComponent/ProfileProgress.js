import React from 'react';
import styles from './component.module.css';
import demoProgress from '../../../../public/assets/demoProgress.png';
import Image from 'next/image';

const ProfileProgress = () => {
  return (
    <div className={styles.profileProgressMain}>
      <div className={styles.profileProgressTitle}>Level 1 Progress</div>
      <Image src={demoProgress} width={700} alt="Progress bar" />
    </div>
  );
};
export default ProfileProgress;
