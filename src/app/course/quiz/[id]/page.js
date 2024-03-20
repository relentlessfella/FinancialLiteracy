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
import noResult from '../../../../../public/assets/NoResults.jpg';

const QuizPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [activeAnswer, setActiveAnswer] = useState();
  const answers = [];
  const answerType = ['a.', 'b.', 'c.', 'd.'];
  // const handleSetAnswers = (answer_num) => {
  //   answers.push(currentAnswer);
  //   console.log(answers);
  // };
  const [active, setActive] = useState(false);
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
  console.log('Quiz Data ', data);

  useEffect(() => {
    fetchAllCards();
    window.scrollTo(0, 0);
  }, []);
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
  // const handleActiveAnswer = (answer) => {
  //   setCurrentAnswer(answer);
  // };
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
  } else if (data.count === 0) {
    return (
      <div style={{ textAlign: 'center', fontSize: '28px', marginTop: '100px', opacity: '0.9' }}>
        <Image src={noResult} width={400} height={300} />
        <div>
          Ooops we don't have
          <br /> quiz on this course! XD
        </div>
      </div>
    );
  } else {
    return (
      <div className={alfaSlabOne.variable}>
        <div className={styles.container}>
          <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
          <div>
            <div style={{ display: 'flex' }}>{/* <div>Quiz {data[currentPage].id}</div> */}</div>
            <div>{data.name}</div>
            <div style={{ marginTop: '50px', display: 'flex' }}>
              Basic Understanding of Financial Literacy
            </div>
          </div>
        </div>
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
                className={active ? styles.quizRightAnswer : styles.quizQuestion}
                onClick={() => setActive(!active)}>
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
                width: '120px',
                padding: '12px 8px',
                margin: '30px 0',
                marginBottom: '50px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: 'gray',
                color: 'white',
                fontWeight: '700',
                userSelect: 'none',
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
              }}
              onClick={handlePreviousPage}>
              Previous
            </button>
            <button
              style={{
                width: '120px',
                padding: '12px 8px',
                margin: '30px 0',
                marginBottom: '50px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: '#A2BF00',
                color: 'white',
                fontWeight: '700',
                userSelect: 'none',
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
              }}
              onClick={data.next === null ? () => {} : handleNextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default QuizPage;
