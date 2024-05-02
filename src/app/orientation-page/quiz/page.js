'use client';
import React, { useState, useEffect } from 'react';
import { poppins } from '@/app/login/page';
import styles from './page.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const OrientationQuiz = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const answerType = ['a.', 'b.', 'c.', 'd.'];
  const arrayAnswers = [];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // const fetchQuiz = async () => {
  //   try {
  //     const response = await axios({
  //       method: 'get',
  //       url: `http://86.107.44.136:8000/navigator/orientation_test/`,
  //       params: {
  //         page: currentPage,
  //       },
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     setData(response.data);
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  useEffect(() => {
    localStorage.clear();
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

  try {
    // useEffect(() => {
    //   const id = localStorage.getItem('id');
    //   // if (id) {
    //   //   setData((prevState) => ({
    //   //     ...prevState,
    //   //     id: id,
    //   //   }));
    //   // }
    // }, []);
  } catch (error) {
    throw error;
  }
  // Use an object instead of an array
  const [answers, setAnswers] = useState({});

  // Function to update the answers
  const updateAnswers = (page, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [page]: answer,
    }));
    localStorage.setItem('answers', JSON.stringify({ ...answers, [page]: answer }));
    // localStorage.clear();
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `http://86.107.44.136:8000/navigator/orientation_test/`,
          params: {
            page: currentPage,
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
    fetchQuiz();
  }, []);
  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setSelectedAnswer(answers[nextPage] || null);
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
        url: `http://86.107.44.136:8000/navigator/orientation_test/submit/`,
        data: {
          answers: vals,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('level', JSON.stringify(response.data.level));
      router.push('/orientation-page/recomendation');
    } catch (error) {
      throw error;
    }
  };

  if (data === null) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
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
      <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
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
                  selectedAnswer === item.id ? styles.quizRightAnswer : styles.quizQuestion
                }
                onClick={() => handleClick(item.id)}>
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
      </div>
    );
  }
};
export default OrientationQuiz;
