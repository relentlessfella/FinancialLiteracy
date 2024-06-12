'use client';
import React, { useEffect, useState } from 'react';
import SimulatorLayout from '@/components/SimulatorLayout/SimulatorLayout';
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import axios from 'axios';
import Image from 'next/image';
import image from '@assets/general.jpg';
import simulationCorrectImg from '@assets/correct.jpg';
import simulationWrongImg from '@assets/wrong.jpg';
import Loader from '@/components/Loader/Loader2';
import tick from '@assets/SimulationImg/SimulationTick.png';
import wrongTick from '@assets/SimulationImg/wrongTick.png';
//Retrieve required
const SimulationCardPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [userSelect, setUserSelect] = useState({ id: null, answer: null });
  const [correctAnswer, setCorrectAnswer] = useState({ id: null, answer: null });
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  // const fetchSimulation = async () => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       url: `http://localhost:8000/simulator/fin_trial/${params.id}/`,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     setData(response.data);
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  console.log(data);
  useEffect(() => {
    const fetchSimulation = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `http://localhost:8000/simulator/fin_trial/${params.id}/`,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setData(response.data);
      } catch (error) {
        throw error;
      }
    };
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
  if (data === null) {
    return (
      <SimulatorLayout>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      </SimulatorLayout>
    );
  } else {
    const correctAnswer = data.answers.find((answer) => answer.is_correct === true);
    () => setCorrectAnswer(correctAnswer);
    console.log(correctAnswer);
    return (
      <SimulatorLayout category={data.category}>
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
                <div className={styles.correctImageWrapper}>
                  <div style={{ margin: '0 auto' }}>
                    <Image
                      src={simulationCorrectImg}
                      width={400}
                      height={300}
                      style={{ borderRadius: '15px' }}
                      layout="responsive"
                      alt="Simulation page main image"
                    />
                    <li key={userSelect.id} className={styles.option_correct}>
                      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '45px' }}>
                        {/* <div className={styles.option_inner}>{userSelect.id}.</div> */}
                        <div>{userSelect.text}</div>
                      </div>
                      <Image
                        src={tick}
                        width={30}
                        height={30}
                        style={{ margin: '0 20px' }}
                        alt="Tick icon"
                      />
                    </li>
                  </div>
                </div>
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
                <div className={styles.correctImageWrapper}>
                  <div style={{ margin: '0 auto' }}>
                    <Image
                      src={simulationWrongImg}
                      width={400}
                      height={300}
                      style={{ borderRadius: '15px' }}
                      layout="responsive"
                      alt="Simulation page main image"
                    />

                    <li key={userSelect.id} className={styles.option_correct}>
                      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '45px' }}>
                        {/* <div className={styles.option_inner}>{userSelect.id}.</div> */}
                        <div>{userSelect.text}</div>
                      </div>
                      <Image
                        src={wrongTick}
                        width={30}
                        height={30}
                        style={{ margin: '0 20px' }}
                        alt="Wrong icon"
                      />
                    </li>
                    <li key={correctAnswer.id} className={styles.option_correct}>
                      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '45px' }}>
                        {/* <div className={styles.option_inner}>{correctAnswer.id}.</div> */}
                        <div>{correctAnswer.text}</div>
                      </div>
                      <Image
                        src={tick}
                        width={30}
                        height={30}
                        style={{ margin: '0 20px' }}
                        alt="Tick icon"
                      />
                    </li>
                  </div>
                </div>
              </ul>
            )
          ) : (
            <ul className={styles.main}>
              <div className={styles.level}>
                <p>LeveL:&nbsp;</p>
                <p className={styles.level_inner}>{data.level}</p>
              </div>
              <div className={styles.imageWrapper}>
                <div>
                  <p className={styles.title}>{data.name}</p>
                  <div
                    style={{
                      width: '750px',
                      height: '400px',
                      margin: '0 auto',
                    }}>
                    <Image
                      alt="Image of test"
                      src={image}
                      width={750}
                      height={400}
                      className={styles.simulatorImage}
                      // layout="responsive"

                      style={{ borderRadius: '20px' }}
                    />
                  </div>
                  <div className={styles.question}>{data.situation}</div>
                  <div style={{ color: '#858585', textAlign: 'center', fontSize: '20px' }}>
                    Instructions: Choose the best answer (1, 2, or 3)
                  </div>
                  <ul className={styles.option_outter}>
                    {data.answers.map((answer, key) => (
                      <li
                        key={answer.id}
                        className={styles.option}
                        onClick={() => handleClick(answer)}>
                        <div className={styles.option_inner}>{key + 1}.</div>
                        <div style={{ fontSize: '18px' }}>{answer.text}</div>
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
