'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import axios from 'axios';
import { poppins } from '@/fonts';
import noResult from '@assets/NoResults.jpg';
import QuizLayout from './QuizLayout/QuizLayout';
import Loader from '@/components/Loader/Loader2';

const QuizPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const answerType = ['a.', 'b.', 'c.', 'd.'];
  const router = useRouter();
  const id = params.id;
  console.log(id);
  const [answers, setAnswers] = useState({});
  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `http://localhost:8000/courses/quiz/`,
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
    fetchAllCards();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    localStorage.removeItem('answers');
  }, []);
  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem('answers'));
    if (storedAnswers) {
      setAnswers(storedAnswers);
      if (storedAnswers[currentPage]) {
        setSelectedAnswer(storedAnswers[currentPage]);
      }
    }
  }, []);
  const handleNextPage = () => {
    const prevPage = currentPage + 1;
    setCurrentPage(prevPage);
    setSelectedAnswer(answers[prevPage] || null);
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
    setSelectedAnswer(answers[prevPage] || null);
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

  const updateAnswers = (page, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [page]: answer,
    }));
    localStorage.setItem('answers', JSON.stringify({ ...answers, [page]: answer }));
  };
  const handleClick = (id) => {
    setSelectedAnswer(id);
    updateAnswers(currentPage, id);
    const answers = localStorage.getItem('answers');
    const parseAns = JSON.parse(answers);
    const vals = Object.values(parseAns);
    console.log(vals);
  };

  const fetchSubmit = async () => {
    try {
      const answers = localStorage.getItem('answers');
      const parseAns = JSON.parse(answers);
      const vals = Object.values(parseAns);
      const response = await axios({
        method: 'post',
        url: `http://localhost:8000/progress/quiz_progress/${id}/submit/`,
        params: {
          user_id: 1,
        },
        data: {
          answers: vals,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('level', JSON.stringify(response.data.level));
      router.push(`${params.id}/feedback/`);
      console.log(response.data);
    } catch (error) {
      throw error;
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
          Ooops we don&apos;t have
          <br /> quiz on this course! XD
        </div>
      </div>
    );
  } else {
    const handleNextAnswer = () => {
      // arrayAnswers.push(selectedAnswer);
      // console.log(arrayAnswers);
      console.log(data.next);
      if (data.next === null) {
        fetchSubmit();
      } else {
        handleNextPage();
      }
    };
    return (
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
          <ul className={styles.ul}>
            {data.results[0].answers.map((item, key) => (
              <li
                style={{ display: 'flex' }}
                key={item.id}
                className={
                  selectedAnswer === item.id ? styles.quizRightAnswer : styles.quizQuestion
                }
                onClick={() => handleClick(item.id)}>
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
      </QuizLayout>
    );
  }
};

export default QuizPage;
