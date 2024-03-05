'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import courseImage from '../../../public/assets/CourseImage.png';
import { alfaSlabOne } from '../main/page';
import playCourse from '../../../public/assets/PlayCourse.svg';
import bookmark from '../../../public/assets/bookmarkCourse.svg';
import LessonCard from '@/components/CoursePageCard/LessonCard';
import styles from './page.module.css';
import backButton from '../../../public/assets/courseBackButton.svg';

const CoursePage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={alfaSlabOne.variable}>
      <div className={styles.backgroundCourseImage}></div>
      <div className={styles.container}>
        <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
        <div>
          <div style={{ display: 'flex' }}>
            <div>Level 1</div>
          </div>
          <div>Basic Understanding of Financial Literacy</div>
          <div style={{ marginTop: '50px', display: 'flex' }}>
            <button className={styles.startLessonBtn}>
              <Image src={playCourse} width={20} height={20} style={{ margin: 'auto 8px' }} />
              <div style={{ margin: 'auto 0' }}>Start Lesson</div>
            </button>
            <button
              className={active === true ? styles.startLessonBtn : styles.bookmarkBtn}
              onClick={() => setActive(!active)}
              style={{ margin: '0 50px' }}>
              <Image src={bookmark} width={20} height={20} style={{ margin: 'auto 8px' }} />
              <div style={{ margin: 'auto 0' }}>Bookmark</div>
            </button>
          </div>
        </div>
      </div>
      <div style={{ height: '100vh' }}>
        <LessonCard />
      </div>
    </div>
  );
};

export default CoursePage;
