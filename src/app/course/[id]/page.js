'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { alfaSlabOne } from '../../main/page';
import playCourse from '../../../../public/assets/PlayCourse.svg';
import bookmark from '../../../../public/assets/bookmarkCourse.svg';
import LessonCard from '@/components/CoursePageCard/LessonCard';
import styles from '../page.module.css';
import backButton from '../../../../public/assets/courseBackButton.svg';
import axios from 'axios';
import QuizCard from '@/components/QuizCard/QuizCard';
import { useRouter } from 'next/navigation';
import bookmarkInactive from '../../../../public/assets/bookmarkInactive.svg';
import { poppins } from '@/app/login/page';
import CertificateCard from '@/components/CertificateCard/CertificateCard';

const CoursePage = ({ params }) => {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);
  const router = useRouter();
  const id = params.id;
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
  useEffect(() => {
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
      console.log(response);
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
      console.log(error);
      // throw error;
    }
  };

  if (data === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={alfaSlabOne.variable}>
        <div>
          <div className={styles.backgroundCourseImage}></div>
          <div className={styles.container}>
            <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
            <div>
              <div style={{ display: 'flex' }}>
                <div>Level {data.name}</div>
              </div>
              <div>{data.name}</div>
              <div style={{ marginTop: '50px', display: 'flex' }}>
                <button className={styles.startLessonBtn} onClick={() => fetchCourseJoin()}>
                  <Image src={playCourse} width={20} height={20} style={{ margin: 'auto 8px' }} />
                  <div style={{ margin: 'auto 0' }}>Start Lesson</div>
                </button>
                <button
                  className={styles.bookmarkBtn}
                  onClick={data.is_bookmarked === false ? fetchAddBookmark : fetchRemoveBookmark}
                  style={{ margin: '0 50px' }}>
                  {data.is_bookmarked === false ? (
                    <Image
                      src={bookmarkInactive}
                      width={20}
                      height={20}
                      style={{ margin: 'auto 8px' }}
                    />
                  ) : (
                    <Image src={bookmark} width={20} height={20} style={{ margin: 'auto 8px' }} />
                  )}
                  <div style={{ margin: 'auto 0' }}>Bookmark</div>
                </button>
              </div>
            </div>
          </div>
          <div style={{ minHeight: '100vh', margin: '0px 160px' }}>
            <div>
              <LessonCard />
            </div>
            <div style={{ padding: '5px 20px', margin: '45px 180px' }}>
              <div style={{ padding: '10px 40px' }}>
                <p style={{ color: '#FE602F', fontWeight: '900', fontSize: '38px' }}>Big Quiz</p>
                <p
                  style={{
                    color: '#858585',
                    display: 'list-item',
                    listStyle: 'inside',
                    fontSize: '20px',
                  }}>
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
