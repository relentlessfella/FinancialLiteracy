'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import backButton from '../../../../../public/assets/courseBackButton.svg';
import axios from 'axios';
import { alfaSlabOne } from '@/app/main/page';
import { poppins } from '@/app/login/page';
import noResult from '../../../../../public/assets/NoResults.jpg';
import QuizLayout from './QuizLayout/QuizLayout';

const QuizPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({
    answer_1: null,
    state_1: false,
    answer_2: null,
    state_2: false,
    answer_3: null,
    state_3: false,
    answer_4: null,
    state_4: false,
  });
  const answers = [];
  const answerType = ['a.', 'b.', 'c.', 'd.'];
  const router = useRouter();
  const id = params.id;
  const fetchAllCards = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/courses/quiz/`,
        params: {
          course_id: id,
          page: 1,
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
  console.log(data);
  const handleNextPage = () => {
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
  const handleAnswerState = (key) => {
    setSelectedAnswer((prevState) => ({
      ...prevState,
      [`state_${key}`]: !prevState[`state_${key}`],
    }));
  };
  if (data === null) {
    return <div>{params.id}</div>;
  } else if (data.count === 0) {
    return (
      <div style={{ textAlign: 'center', fontSize: '28px', marginTop: '100px', opacity: '0.9' }}>
        <Image alt="No Results" src={noResult} width={400} height={300} />
        <div>
          Ooops we don't have
          <br /> quiz on this course! XD
        </div>
      </div>
    );
  } else {
    return (
      // <div className={alfaSlabOne.variable}>
      //   <div className={styles.description}>
      //     <div className={styles.container}>
      //       <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
      //       <div>
      //         <div style={{ display: 'flex' }}>
      //           <div>Quiz {data.results[0].id}</div>
      //         </div>
      //         <div>{data.name}</div>
      //         <div style={{ marginTop: '30px', display: 'flex' }}>
      //           Basic Understanding of Financial Literacy
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      <QuizLayout data={data}>
        <div className={`${poppins.className} ${styles.quizMain}`}>
          <div
            style={{
              margin: '30px 0 20px 0',
              color: '#FE602F',
              fontSize: '28px',
            }}>
            Question
          </div>
          <div style={{ color: '#858585', fontWeight: '400' }}>
            Instructions: Choose the best answer (a, b, c, or d) for each question.
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
          <ul
            style={{
              listStyleType: 'none',
              padding: '0',
              margin: '0 auto',
              marginBottom: '30px',
              width: '600px',
              textAlign: 'start',
              height: '210px',
            }}>
            {data.results[0].answers.map((item, key) => (
              <li
                style={{ display: 'flex' }}
                key={item.id}
                className={
                  selectedAnswer[`state_${key + 1}`] ? styles.quizRightAnswer : styles.quizQuestion
                }
                onClick={() => handleAnswerState(key + 1)}>
                <div style={{ margin: '0 40px' }}>{answerType[key]}</div>
                {item.text}
              </li>
            ))}
          </ul>
          <div
            style={{
              display: 'flex',
              justifyContent: data.previous === null ? 'flex-end' : 'space-between',
              width: '600px',
              margin: '0 auto',
            }}>
            <button
              style={{
                display: data.previous === null ? 'none' : 'block',
              }}
              className={styles.back_button}
              onClick={handlePreviousPage}>
              Back
            </button>
            <button
              style={data.next === null ? { backgroundColor: '#a2bf00', color: '#fff' } : {}}
              className={styles.next_button}
              onClick={data.next === null ? () => {} : handleNextPage}>
              {data.next === null ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </QuizLayout>
      // </div>
    );
  }
};

export default QuizPage;
