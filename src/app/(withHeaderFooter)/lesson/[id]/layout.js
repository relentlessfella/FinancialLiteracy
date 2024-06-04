import React from 'react';
import backButton from '@assets/courseBackButton.svg';
import playCourse from '@assets/PlayCourse.svg';
import Image from 'next/image';
import styles from './page.module.css';
import { alfaSlabOne } from '@/fonts';
const Layout = ({ children, params }) => {
  return (
    <div>
      <div className={`${styles.main} ${alfaSlabOne.className}`}>
        <div className={styles.container}>
          <Image
            src={backButton}
            width={22}
            height={22}
            className={styles.backButton}
            alt="Back button image"
          />
          <div className={styles.titles}>
            {/* <div className={styles.lessonTitle}>Lesson {params.id}</div> */}
            <div className={styles.lessonTitle}>Lesson</div>
            {/* <div className={styles.lessonUnderTitle}>{'data.name'}</div> */}
          </div>
        </div>
      </div>
      <div style={{ padding: '50px 0' }}>{children}</div>
    </div>
  );
};

export default Layout;
