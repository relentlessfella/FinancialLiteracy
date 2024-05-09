'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Accordion from '@/components/Accordion/Accordion';
import VideoFragment from '@/components/VideoFragment/VideoFragment';
import { useFetchUser } from '@/contexts/authContext/authContext';
import { getUserFromLocalCookie } from '@/lib/auth';
import Loader from '@/components/Loader/Loader2';
import axios from 'axios';
import { poppins } from '@/fonts';
const Lesson = ({ params }) => {
  const [data, setData] = useState(null);
  const { id } = getUserFromLocalCookie();
  const fetchLesson = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:8000/courses/lesson/${params.id}/get_lessons/?user_id=${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data[0].url);
    } catch (error) {
      if (error.response.status === 500) {
        alert('Error');
      }
    }
  };
  // console.log(data);

  useEffect(() => {
    fetchLesson();
  }, []);

  const handleSubmit = () => {
    try {
      const response = axios({
        method: 'get',
        url: `http://localhost:8000/progress/course_progress/${params.id}/complete_lesson/?user_id=${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data.response) {
        alert('Submitted');
      }
    } catch (error) {
      if (error.response.status === 405) {
        alert('You already finished');
      }
      if (error.response.status === 500) {
        alert('Error');
      }
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
          <VideoFragment videoId={data} />
          <Accordion />
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
