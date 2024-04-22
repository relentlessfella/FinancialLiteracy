'use client';
import React, { useEffect, useState } from 'react';
import SimulatorLayout from '@/components/SimulatorLayout/SimulatorLayout';
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import axios from 'axios';
import Image from 'next/image';
import image from '../../../../../public/assets/SimulationImg/SimulationPageImg.png';
import simulationCorrectImg from '../../../../../public/assets/SimulationImg/SimulationCorrectImg.png';
import tick from '../../../../../public/assets/SimulationImg/SimulationTick.png';
import wrongTick from '../../../../../public/assets/SimulationImg/wrongTick.png';
//Retrieve required
const SimulationCardPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [userSelect, setUserSelect] = useState({ id: null, answer: null });
  const [correctAnswer, setCorrectAnswer] = useState({ id: null, answer: null });
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const fetchSimulation = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `http://0.0.0.0:8000/simulator/fin_trial/${params.id}/`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
    } catch (error) {
      throw error;
    }
  };
  console.log(data);
  useEffect(() => {
    fetchSimulation();
  }, []);
  // useEffect(() => {
  //   // Find the correct answer when the data prop changes
  //   const correct = data.answers.find((answer) => answer.is_correct === true);
  //   if (correct) {
  //     setCorrectAnswer({ id: correct.id, answer: correct.text });
  //   }
  // }, [data]);
  const handleClick = (answer) => {
    // is_correct === true
    //   ? setCorrectAnswer({ id: id, answer: text })
    //   : setUserSelect({ id: id, answer: text });
    // if (is_correct) {
    //   setCorrectAnswer({ id: id, answer: text });
    // }
    // setUserSelect({ id: id, answer: text });
    setUserSelect(answer);
    setShowCorrectAnswer(true);
  };
  // const handleRightAnswer = () => {

  // }

  if (data === null) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  } else {
    const correctAnswer = data.answers.find((answer) => answer.is_correct === true);
    () => setCorrectAnswer(correctAnswer);
    console.log(correctAnswer);
    return (
      <SimulatorLayout>
        <div className={styles.container}>
          {showCorrectAnswer === true ? (
            userSelect.is_correct === true ? (
              <ul className={styles.main}>
                <p
                  style={{
                    textAlign: 'center',
                    fontWeight: '800',
                    color: '#A2BF00',
                    fontSize: '24px',
                    marginTop: '50px',
                  }}>
                  Answer
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
                  <Image src={simulationCorrectImg} width={400} height={300} />
                </div>
                <li key={userSelect.id} className={styles.option_correct}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.option_inner}>{userSelect.id}.</div>
                    <div>{userSelect.text}</div>
                  </div>
                  <Image src={tick} width={30} height={30} style={{ margin: '0 20px' }} />
                </li>
              </ul>
            ) : (
              <ul className={styles.main}>
                <p
                  style={{
                    textAlign: 'center',
                    fontWeight: '800',
                    color: '#A2BF00',
                    fontSize: '24px',
                    marginTop: '50px',
                  }}>
                  Answer
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
                  <Image src={simulationCorrectImg} width={400} height={300} />
                </div>
                <li key={userSelect.id} className={styles.option_correct}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.option_inner}>{userSelect.id}.</div>
                    <div>{userSelect.text}</div>
                  </div>
                  <Image src={wrongTick} width={30} height={30} style={{ margin: '0 20px' }} />
                </li>
                <li key={correctAnswer.id} className={styles.option_correct}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.option_inner}>{correctAnswer.id}.</div>
                    <div>{correctAnswer.text}</div>
                  </div>
                  <Image src={tick} width={30} height={30} style={{ margin: '0 20px' }} />
                </li>
              </ul>
            )
          ) : (
            <ul className={styles.main}>
              <div className={styles.level}>
                <p>LeveL:&nbsp;</p>
                <p className={styles.level_inner}>{data.level}</p>
              </div>
              <div
                style={{
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                <div>
                  <p className={styles.title}>{data.name}</p>
                  <Image
                    alt="Image of test"
                    src={image}
                    width={650}
                    height={400}
                    style={{ borderRadius: '20px' }}
                  />
                  <div className={styles.question}>{data.situation}</div>
                  <div style={{ color: '#858585' }}>
                    Instructions: Choose the best answer (1, 2, or 3)
                    {/* {console.log(correctAnswer)} */}
                  </div>
                  <ul className={styles.option_outter}>
                    {/* {showCorrectAnswer === true && userSelect.answer === correctAnswer.answer ? (
                    <li key={userSelect.id} className={styles.option}>
                      <div className={styles.option_inner}>{userSelect.id}.</div>
                      <div>{userSelect.answer}</div>
                    </li>
                  ) : (
                    data.answers.map((answer) => (
                      <li
                        key={answer.id}
                        className={styles.option}
                        onClick={() => handleClick(answer.is_correct, answer.id, answer.text)}>
                        <div className={styles.option_inner}>{answer.id}.</div>
                        <div>{answer.text}</div>
                      </li>
                    ))
                  )} */}
                    {data.answers.map((answer) => (
                      <li
                        key={answer.id}
                        className={styles.option}
                        // onClick={() => handleClick(answer.is_correct, answer.id, answer.text)}>
                        onClick={() => handleClick(answer)}>
                        <div className={styles.option_inner}>{answer.id}.</div>
                        <div>{answer.text}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ul>
          )}
        </div>
      </SimulatorLayout>
    );
  }
};

export default SimulationCardPage;
