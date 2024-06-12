'use client';
import React, { useState, useEffect } from 'react';
import QuizLayout from '../QuizLayout/QuizLayout';
import styles from './page.module.css';
import { poppins } from '@/fonts';
import axios from 'axios';
import { getUserFromLocalCookie } from '@/lib/auth';
import Loader from '@/components/Loader/Loader2';
import Image from 'next/image';
import left from '@assets/leftConfeti.svg';
import { useRouter } from 'next/navigation';
import right from '@assets/rightConfeti.svg';

const Score = ({ params }) => {
  const { id } = getUserFromLocalCookie();
  const [data, setData] = useState(null);
  const router = useRouter();
  const course_id = params.id;
  const fetchScore = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `http://127.0.0.1:8000/progress/quiz_progress/${course_id}/get_quiz_result/`,
        params: {
          user_id: id,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      console.log(response.data);
      window.scrollTo(0, 0);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchScore();
  }, []);

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  } else {
    return (
      <QuizLayout>
        <div className={`${poppins.className} ${styles.quizMain}`}>
          <div style={{ margin: '40px 0', color: '#FE602F', fontSize: '34px' }}>Your Score:</div>
          <div
            style={{
              margin: '20px 0',
              color: '#A2BF00',
              fontSize: '74px',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Image src={left} />
            <div style={{ margin: 'auto 0' }}>
              {data.result.CorrectAnswers}/{data.result.AnswersNum}
            </div>
            <Image src={right} />
          </div>
          <div className={poppins.variable}>
            <button
              className={styles.review}
              onClick={() => router.push(`/course/quiz/${params.id}/results`)}>
              Review
            </button>
            <button className={styles.finish} onClick={() => router.push(`/course/${params.id}`)}>
              Finish
            </button>
          </div>
        </div>
      </QuizLayout>
    );
  }
};

export default Score;
