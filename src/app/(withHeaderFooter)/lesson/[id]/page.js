'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Accordion from '@/components/Accordion/Accordion';
import VideoFragment from '@/components/VideoFragment/VideoFragment';
import { useFetchUser } from '@/contexts/authContext/authContext';
import { getUserFromLocalCookie } from '@/lib/auth';
import Loader from '@/components/Loader/Loader2';
import axios from 'axios';
import Layout from './layout';
import { poppins } from '@/fonts';
import { Modal } from 'antd';
import { useRouter } from 'next/navigation';
const Lesson = ({ params }) => {
  const [data, setData] = useState(null);
  const { id } = getUserFromLocalCookie();
  const [lessonID, setLessonID] = useState(null);
  const router = useRouter();
  const [accordionData, setAccordionData] = useState(null);
  const fetchLesson = async () => {
    try {
      const response = await axios({
        method: 'get',
        // url: `http://localhost:8000/courses/lesson/${params.id}/get_lessons/?user_id=${id}`,
        url: `http://localhost:8000/courses/lesson/${params.id}/`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
    } catch (error) {
      alert('Error');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchLesson();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: `http://localhost:8000/progress/course_progress/${params.id}/complete_lesson/?user_id=${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      if (response.data.AlreadySubmit == true) {
        // alert('Already Submitted');
        Modal.info({
          title: 'You already submitted lesson!',
          width: 600,
          centered: true,
        });
      }
      if (response.data.LessonComplete == true) {
        // alert('Lesson Succesfully Finished!');
        Modal.success({
          title: 'Lesson Succesfully Finished!',
          width: 600,
          centered: true,
        });
        // router.push('/');
      }
      if (response.data.DidNotJoinedCourse === true) {
        // alert('You did not joined course!');
        Modal.warning({
          title: 'You did not joined course!',
          width: 600,
          centered: true,
        });
      }
    } catch (error) {
      alert('Sorry, Error Occured');
    }
  };

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className={styles.mainChildren}>
        <div style={{ width: '1000px', margin: '20px' }}>
          {/* {data.map((item, index) => { */}
          <VideoFragment videoId={data.url} />
          {/* })} */}
          {console.log(params.id)}
          {/* <VideoFragment videoId={data[0].url} /> */}
          {/* <VideoFragment videoId={data[0].url} /> */}
          {data.accordions.length != 0 ? (
            <div>
              <div
                style={{
                  color: '#829902',
                  fontSize: '40px',
                  fontWeight: '700',
                  marginTop: '100px',
                  marginBottom: '30px',
                }}>
                Questions and answers
              </div>
              <Accordion accordionData={data.accordions} />
            </div>
          ) : (
            ''
          )}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className={`${styles.button} ${poppins.className}`} onClick={handleSubmit}>
              Finish Lesson
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Lesson;
