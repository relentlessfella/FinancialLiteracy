'use client';
import React, { useEffect, useState } from 'react';
import backButton from '@assets/courseBackButton.svg';
import playCourse from '@assets/PlayCourse.svg';
import Image from 'next/image';
import styles from './page.module.css';
import { alfaSlabOne } from '@/fonts';
import axios from 'axios';
import Loader from '@/components/Loader/Loader2';
const Layout = ({ children, params }) => {
  const [data, setData] = useState(null);
  const fetchLesson = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:8000/courses/lesson/${params.id}/`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      console.log('eeeee', response.data);
      console.log('ID of lesson', params.id);
    } catch (error) {
      alert('Error');
      // }
    }
  };

  useEffect(() => {
    fetchLesson();
  }, []);

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  } else {
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
              <div className={styles.lessonTitle}>{data.name}</div>
              {/* <div className={styles.lessonUnderTitle}>{'data.name'}</div> */}
            </div>
          </div>
        </div>
        <div style={{ padding: '50px 0' }}>{children}</div>
      </div>
    );
  }
};

export default Layout;
