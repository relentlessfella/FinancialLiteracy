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
import { useRouter } from 'next/navigation';
import bookmarkInactive from '../../../../public/assets/bookmarkInactive.svg';

const CoursePage = ({ params }) => {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);
  const router = useRouter();
  const id = params.id;
  const fetchAllCards = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/courses/course/${params.id}/`,
        params: {
          user_id: 1,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      console.log('CP: ', response);
    } catch (error) {
      throw error;
    }
  };
  console.log('DATA ', data);

  useEffect(() => {
    fetchAllCards();
    window.scrollTo(0, 0);
  }, []);

  const fetchAddBookmark = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: `http://127.0.0.1:8000/courses/course/${params.id}/add_bookmark/?user_id=1`,
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
        url: `http://127.0.0.1:8000/courses/course/${params.id}/remove_bookmark/?user_id=1`,
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

  if (data === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={alfaSlabOne.variable}>
        <div className={styles.backgroundCourseImage}></div>
        <div className={styles.container}>
          <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
          <div>
            <div style={{ display: 'flex' }}>
              <div>Level {data.name}</div>
            </div>
            <div>{data.name}</div>
            <div style={{ marginTop: '50px', display: 'flex' }}>
              <button className={styles.startLessonBtn}>
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
        <div style={{ minHeight: '100vh' }}>
          <LessonCard />
        </div>
      </div>
    );
  }
};

export default CoursePage;
