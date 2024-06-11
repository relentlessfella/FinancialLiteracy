'use client';
import React, { useEffect, useState } from 'react';
import { poppins } from '@/fonts';
import styles from './page.module.css';
import axios from 'axios';
import Loader from '@/components/Loader/Loader2';
import noResult from '@assets/NoResults.jpg';
import { useRouter } from 'next/navigation';
import { getUserFromLocalCookie } from '@/lib/auth';

const Results = ({ params }) => {
  const [data, setData] = useState(null);
  const course_id = params.id;
  const answerType = ['a.', 'b.', 'c.', 'd.'];
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { id } = getUserFromLocalCookie();

  const fetchQuizHistory = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://127.0.0.1:8000/courses/quiz/quiz_history/',
        params: {
          course_id: course_id,
          page: currentPage,
          user_id: id,
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
    fetchQuizHistory();
  }, []);

  const handleNextPage = () => {
    const prevPage = currentPage + 1;
    setCurrentPage(prevPage);
    const fetchAllCards = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `${data.next}`,
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
  };
  const handlePreviousPage = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    const fetchAllCards = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `${data.previous}`,
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
  };

  const handleNextAnswer = () => {
    if (data.next === null) {
      router.push(`/course/quiz/${params.id}/score`);
      // router.push(`${params.id}/feedback/`);
    } else {
      handleNextPage();
    }
  };

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  } else if (data.count === 0) {
    return (
      <div style={{ textAlign: 'center', fontSize: '28px', marginTop: '100px', opacity: '0.9' }}>
        <Image alt="No Results" src={noResult} width={400} height={300} />
        <div>
          Sorry we don&apos;t have
          <br /> quiz on this course
        </div>
      </div>
    );
  } else {
    console.log(data);
    return (
      <div className={`${poppins.className} ${styles.quizMain}`}>
        <div
          style={{ color: '#FE602F', fontWeight: '700', fontSize: '28px', margin: '20px 0 5px 0' }}>
          Results
        </div>
        <div
          style={{
            margin: '10px 0 20px 0',
            color: '#FE602F',
            fontSize: '28px',
          }}>
          Question
        </div>
        <div
          style={{
            color: '#333333',
            fontWeight: '700',
            fontSize: '',
            fontSize: '20px',
            margin: '20px 0',
          }}>
          {data.results[0].question}
        </div>
        <ul className={styles.ul}>
          {data.results[0].answers.map((item, key) => (
            <li
              style={{ display: 'flex' }}
              key={item.id}
              className={
                item.is_correct === true && item.chosen === true
                  ? styles.quizRightAnswer
                  : item.chosen === true
                  ? styles.quizWrongAnswer
                  : item.is_correct === true
                  ? styles.quizRightAnswer
                  : styles.quizQuestion
              }
              onClick={() => handleClick(item.id)}>
              {console.log('dsdsds', item)}
              <div className={styles.answerType}>{answerType[key]}</div>
              {item.text}
            </li>
          ))}
        </ul>
        <div
          className={styles.buttons}
          style={{ justifyContent: data.previous === null ? 'flex-end' : 'space-between' }}>
          <button
            style={{
              display: data.previous === null ? 'none' : 'block',
            }}
            className={styles.back_button}
            onClick={() => handlePreviousPage()}>
            Back
          </button>
          <button
            style={data.next === null ? { backgroundColor: '#a2bf00', color: '#fff' } : {}}
            className={styles.next_button}
            onClick={() => handleNextAnswer()}>
            {data.next === null ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    );
  }
};

export default Results;
