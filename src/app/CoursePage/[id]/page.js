'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import courseImage from '../../../public/assets/CourseImage.png';
import { alfaSlabOne } from '../../main/page';
import playCourse from '../../../../public/assets/PlayCourse.svg';
import bookmark from '../../../../public/assets/bookmarkCourse.svg';
import LessonCard from '@/components/CoursePageCard/LessonCard';
import styles from '../page.module.css';
import backButton from '../../../../public/assets/courseBackButton.svg';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CoursePage = ({ params }) => {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);
  const id = params.id;
  console.log('ID: ', id);
  const fetchAllCards = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/courses/course/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
    } catch (error) {
      throw error;
    }
  };
  console.log('DATA ', data);

  useEffect(() => {
    fetchAllCards();
  }, []);

  const handleActiveBookmark = () => {
    setActive(!active);
  };

  if (data === null) {
    <div>Loading...</div>;
  } else {
    return (
      <div className={alfaSlabOne.variable}>
        <div className={styles.backgroundCourseImage}></div>
        <div className={styles.container}>
          <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
          <div>
            <div style={{ display: 'flex' }}>
              <div>Level {data.module}</div>
            </div>
            <div>{data.name}</div>
            <div style={{ marginTop: '50px', display: 'flex' }}>
              <button className={styles.startLessonBtn}>
                <Image src={playCourse} width={20} height={20} style={{ margin: 'auto 8px' }} />
                <div style={{ margin: 'auto 0' }}>Start Lesson</div>
              </button>
              <button
                className={active === true ? styles.startLessonBtn : styles.bookmarkBtn}
                onClick={handleActiveBookmark}
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
  }
};

export default CoursePage;
