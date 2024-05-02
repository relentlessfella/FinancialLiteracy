'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import { alfaSlabOne } from '../../main/page';
import { alfaSlabOne } from '@/fonts';
import playCourse from '../../../../public/assets/PlayCourse.svg';
import bookmark from '../../../../public/assets/bookmarkCourse.svg';
import LessonCard from '@/components/LessonCard/LessonCard';
// import styles from '../page.module.css';
import backButton from '../../../../public/assets/courseBackButton.svg';
import axios from 'axios';
import QuizCard from '@/components/QuizCard/QuizCard';
import { useRouter } from 'next/navigation';
import bookmarkInactive from '../../../../public/assets/bookmarkInactive.svg';
// import { poppins } from '@/app/login/page';
import CertificateCard from '@/components/CertificateCard/CertificateCard';
import Loader from '@/components/Loader/Loader2';
import styles from './components.module.css';

const CoursePage = ({ params }) => {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);
  const router = useRouter();
  const id = params.id;
  // const fetchAllCards = async () => {
  //   try {
  //     const response = await axios({
  //       method: 'get',
  //       url: `http://localhost:8000/courses/course/${id}/`,
  //       params: {
  //         user_id: 1,
  //       },
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     setData(response.data);
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `http://localhost:8000/courses/course/${id}/`,
          params: {
            user_id: 1,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setData(response.data);
      } catch (error) {
        throw error;
      }
    };
    fetchAllCards();
    window.scrollTo(0, 0);
  }, []);

  const fetchAddBookmark = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: `http://localhost:8000/courses/course/${params.id}/add_bookmark/?user_id=1`,
        params: {
          user_id: 1,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchAllCards();
    } catch (error) {
      throw error;
    }
  };

  const fetchRemoveBookmark = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: `http://localhost:8000/courses/course/${params.id}/remove_bookmark/?user_id=1`,
        params: {
          user_id: 1,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchAllCards();
    } catch (error) {
      throw error;
    }
  };

  const fetchCourseJoin = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: `http://localhost:8000/progress/course_progress/${params.id}/join/`,
        params: {
          user_id: 1,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        alert('You have joined this course!');
      }
    } catch (error) {
      if (error.response.status === 500) {
        alert('You already joined the course');
      }
    }
  };

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className={alfaSlabOne.variable}>
        <div>
          <div className={styles.backgroundCourseImage}></div>
          <div className={styles.courseWrapper}>
            <div className={styles.container}>
              <Image
                src={backButton}
                width={22}
                height={22}
                className={styles.backButton}
                alt="Back button image"
              />
              <div>
                <div style={{ display: 'flex' }}>
                  <div className={styles.levelTitle}>Level {data.name}</div>
                </div>
                <div className={styles.levelUnderTitle}>{data.name}</div>
                <div className={styles.buttonsWrapper}>
                  <button className={styles.startLessonBtn} onClick={() => fetchCourseJoin()}>
                    <Image
                      src={playCourse}
                      width={20}
                      height={20}
                      className={styles.playIcon}
                      alt="Start course image"
                    />
                    <div style={{ margin: 'auto 0' }}>Start Lesson</div>
                  </button>
                  <button
                    className={styles.bookmarkBtn}
                    onClick={data.is_bookmarked === false ? fetchAddBookmark : fetchRemoveBookmark}>
                    {data.is_bookmarked === false ? (
                      <Image
                        src={bookmarkInactive}
                        width={20}
                        height={20}
                        className={styles.playIcon}
                        alt="Bookmark inactive image"
                      />
                    ) : (
                      <Image
                        src={bookmark}
                        width={20}
                        height={20}
                        className={styles.playIcon}
                        alt="Bookmark image"
                      />
                    )}
                    <div style={{ margin: 'auto 0' }}>Bookmark</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ minHeight: '100vh', margin: '0px auto' }}>
            <div className={styles.quizCardWrapper}>
              <LessonCard />
            </div>
            <div className={styles.quizCardWrapper}>
              <div style={{ padding: '10px 40px' }}>
                <p className={styles.bigQuizTitle}>Big Quiz</p>
                <p className={styles.bigQuizInfo}>
                  Access will be opened after completing all the lessons.
                </p>
              </div>
              <QuizCard course_id={params.id} />
              {data.is_completed && <CertificateCard course_id={params.id} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CoursePage;
