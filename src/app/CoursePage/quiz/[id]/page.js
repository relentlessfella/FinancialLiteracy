'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import backButton from '../../../../../public/assets/courseBackButton.svg';
import axios from 'axios';
import playCourse from '../../../../../public/assets/PlayCourse.svg';
import bookmark from '../../../../../public/assets/bookmarkCourse.svg';
import { alfaSlabOne } from '@/app/main/page';
import { poppins } from '@/app/login/page';

const QuizPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [activeAnswer, setActiveAnswer] = useState();
  const answers = [];
  // const handleSetAnswers = (answer_num) => {
  //   answers.push(currentAnswer);
  //   console.log(answers);
  // };
  const [active, setActive] = useState({
    q1_state: false,
    q1_correct_answer_id: null,

    q2_state: false,
    q2_correct_answer_id: null,

    q3_state: false,
    q3_correct_answer_id: null,

    q4_state: false,
    q4_correct_answer_id: null,
  });
  const router = useRouter();
  const id = params.id;
  const fetchAllCards = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/courses/quiz/`,
        params: {
          course_id: params.id,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      // console.log('CP: ', response);
    } catch (error) {
      throw error;
    }
  };
  // console.log('Quiz Data ', data);

  useEffect(() => {
    fetchAllCards();
    window.scrollTo(0, 0);
  }, []);
  const handleNextPage = () => {
    answers.push(currentAnswer);
    // const fetchSubmit = async () => {
    //   try {
    //     const response = await axios({
    //       method: 'post',
    //       url: `http://127.0.0.1:8000/courses/quiz/${currentAnswer}/submit/`,
    //       params: {
    //         user_id: 1,
    //       },
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    //     setData(response.data);
    //     // console.log('CP: ', response);
    //   } catch (error) {
    //     throw error;
    //   }
    // };
    setCurrentPage(currentPage + 1);
  };
  console.log(answers);
  const handleActiveAnswer = (answer) => {
    setCurrentAnswer(answer);
  };
  const handleRightAnswer = (state, answer) => {
    // if (answer === data[0].correct_answer) {
    // }
    // setActive((prevState) => ({
    //   ...prevState,
    //   state: true,
    //   correct_answer_id: answer,
    // }));
    // console.log(active.q1_state, active.q2_state, active.q3_state, active.q4_state);

    switch (answer) {
      case 0:
        setActive((prevState) => ({
          ...prevState,
          q1_state: state,
          q1_correct_answer_id: answer,
        }));
        setCurrentAnswer(answer);
        break;
      case 1:
        setActive((prevState) => ({
          ...prevState,
          q2_state: state,
          q2_correct_answer_id: answer,
        }));
        setCurrentAnswer(answer);
        break;
      case 2:
        setActive((prevState) => ({
          ...prevState,
          q3_state: state,
          q3_correct_answer_id: answer,
        }));
        setCurrentAnswer(answer);
        break;
      case 3:
        setActive((prevState) => ({
          ...prevState,
          q4_state: state,
          q4_correct_answer_id: answer,
        }));
        setCurrentAnswer(answer);
        break;
      default:
        '';
    }
  };

  if (data === null) {
    return <div>{params.id}</div>;
  } else {
    return (
      <div className={alfaSlabOne.variable}>
        <div className={styles.container}>
          <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
          <div>
            <div style={{ display: 'flex' }}>
              <div>Quiz {data[currentPage].id}</div>
            </div>
            <div>{data.name}</div>
            <div style={{ marginTop: '50px', display: 'flex' }}>
              Basic Understanding of Financial Literacy
            </div>
          </div>
        </div>
        <div className={poppins.className}>
          <div
            className={styles.quizMain}
            style={{
              display: 'flex',
              width: '1000px',
              margin: '125px auto',
              textAlign: 'center',
              fontWeight: '1000',
              borderRadius: '10px',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <div
              style={{
                marginTop: '60px',
                marginBottom: '10px',
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
              {data[currentPage].question}
            </div>
            <ul
              style={{
                listStyleType: 'none',
                padding: '0',
                margin: '0 auto',
                marginBottom: '30px',
                width: '600px',
                textAlign: 'start',
              }}>
              <li
                style={{ display: 'flex' }}
                className={currentAnswer === 0 ? styles.quizRightAnswer : styles.quizQuestion}
                onClick={() => handleActiveAnswer(0)}>
                <div style={{ margin: '0 40px' }}>a.</div>
                {data[currentPage].answer_one}
              </li>
              <li
                style={{ display: 'flex' }}
                className={currentAnswer === 1 ? styles.quizRightAnswer : styles.quizQuestion}
                onClick={() => handleActiveAnswer(1)}>
                <div style={{ margin: '0 40px' }}>b.</div>
                {data[currentPage].answer_two}
              </li>
              <li
                style={{ display: 'flex' }}
                className={currentAnswer === 2 ? styles.quizRightAnswer : styles.quizQuestion}
                onClick={() => handleActiveAnswer(2)}>
                <div style={{ margin: '0 40px' }}>c.</div>
                {data[currentPage].answer_three}
              </li>
              <li
                style={{ display: 'flex' }}
                className={currentAnswer === 3 ? styles.quizRightAnswer : styles.quizQuestion}
                onClick={() => handleActiveAnswer(3)}>
                <div style={{ margin: '0 40px' }}>d. </div>
                {data[currentPage].answer_four}
              </li>
            </ul>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '600px',
                margin: '0 auto',
              }}>
              <button
                style={{
                  width: '120px',
                  padding: '10px',
                  margin: '30px 0',
                  marginBottom: '50px',
                  border: 'none',
                  borderRadius: '10px',
                  backgroundColor: 'gray',
                  color: 'white',
                  fontWeight: '700',
                }}
                onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
              </button>
              <button
                style={{
                  width: '120px',
                  padding: '10px',
                  margin: '30px 0',
                  marginBottom: '50px',
                  border: 'none',
                  borderRadius: '10px',
                  backgroundColor: '#A2BF00',
                  color: 'white',
                  fontWeight: '700',
                }}
                onClick={() => handleNextPage()}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default QuizPage;
