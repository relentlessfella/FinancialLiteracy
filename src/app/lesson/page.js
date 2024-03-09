'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { alfaSlabOne } from '../main/page';
import backButton from '../../../public/assets/courseBackButton.svg';
import Image from 'next/image';
import axios from 'axios';

const LessonPage = () => {
  const [data, setData] = useState(null);
  const fetchLesson = async () => {
    const response = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/courses/lesson/1',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('REAAEREA', response);
    setData(response.data);
  };

  useEffect(() => {
    fetchLesson();
  }, []);

  if (data === null) {
    <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className={alfaSlabOne.variable}>
          <div className={styles.containerInner}>
            <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
            <div>
              <div style={{ display: 'flex' }}>
                <div>Level {data.name}</div>
              </div>
              <div>{data.name}</div>
              <div style={{ marginTop: '50px', display: 'flex' }}></div>
            </div>
          </div>
          <div style={{ minHeight: '100vh' }}>
            <div className={styles.block1}></div>
            <div className={styles.block2}></div>
            <div className={styles.block3}></div>
            <div className={styles.block4}></div>
            <div className={styles.block5}></div>
          </div>
        </div>
      </div>
    );
  }
};

export default LessonPage;
