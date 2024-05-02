'use client';
import React, { useEffect, useState } from 'react';
import styles from '../page.module.css';
// import { alfaSlabOne } from '../../main/page';
import { alfaSlabOne } from '@/fonts';
import backButton from '../../../../public/assets/courseBackButton.svg';
import Image from 'next/image';
import axios from 'axios';
import coinTeacher from '../../../../public/assets/coinTeacher.png';

const LessonPage = ({ params }) => {
  const [data, setData] = useState(null);
  // const fetchLesson = async () => {
  //   const response = await axios({
  //     method: 'GET',
  //     url: `http://86.107.44.136:8000/courses/lesson/${params.id}`,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   setData(response.data);
  //   console.log(response.data);
  // };

  useEffect(() => {
    const fetchLesson = async () => {
      const response = await axios({
        method: 'GET',
        url: `http://86.107.44.136:8000/courses/lesson/${params.id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      console.log(response.data);
    };
    fetchLesson();
    window.scrollTo(0, 0);
  }, []);

  const fetchLessonComplete = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: `http://86.107.44.136:8000/progress/course_progress/${params.id}/complete_lesson/?user_id=1`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        alert('Done');
      }
    } catch (error) {
      if (error.response.status === 500) {
        alert('Lesson already completed');
      }
    }
  };

  if (data === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className={alfaSlabOne.variable}>
          <div className={styles.containerInner}>
            <Image
              style={{ margin: '8px 10px' }}
              src={backButton}
              width={22}
              height={22}
              alt="Back button image"
            />
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
            {/* <div className={styles.block5}></div> */}
            <div className={styles.block6}>
              <div style={{ margin: 'auto 0' }}>
                <Image src={coinTeacher} alt="Virtual simulator coin image" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <div
                  style={{
                    color: '#FE602F',
                    fontSize: '36px',
                    fontWeight: '600',
                    marginBottom: '50px',
                  }}>
                  Shall we continue with the next lesson?
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 auto',
                  }}>
                  <button
                    style={{
                      width: '300px',
                      backgroundColor: '#A2BF00',
                      color: '#fff',
                      borderRadius: '15px',
                      padding: '15px 0px',
                      border: 'none',
                      fontSize: '18px',
                      fontWeight: '600',
                    }}
                    onClick={() => fetchLessonComplete()}>
                    Finish Lesson
                  </button>
                  <button
                    style={{
                      width: '300px',
                      backgroundColor: '#FE602F',
                      color: '#fff',
                      borderRadius: '15px',
                      padding: '15px 0px',
                      border: 'none',
                      fontSize: '18px',
                      fontWeight: '600',
                      margin: '10px 0',
                    }}>
                    Back to the Course Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LessonPage;
