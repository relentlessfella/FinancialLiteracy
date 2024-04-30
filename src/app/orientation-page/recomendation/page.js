'use client';
import React from 'react';
import styles from './page.module.css';
import coinTeacher from '../../../../public/assets/coinTeacher.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
const RecomendationPage = () => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const router = useRouter();
  let level;
  useEffect(() => {
    level = localStorage.getItem('level');
  }, []);
  const data = [
    {
      title: (
        <>
          <span style={{ color: '#A2BF00' }}>Well done, </span>
          <span style={{ color: '#FE602F' }}>My Friend!</span> Considering your preferences and
          interests, I recommend that you begin with
          <span style={{ color: '#FE602F' }}> Level {level} </span> to lay a solid foundation and
          build your knowledge from there.
        </>
      ),
    },
    {
      title: (
        <>
          Let&apos;s start learning the material! Click on &nbsp;
          <span style={{ color: '#FE602F' }}>Start</span>.
        </>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image src={coinTeacher} width={300} height={300} alt="Virtual simulator coin image" />
        <div className={styles.chat_card}>
          {yes === true ? <div>{data[1].title}</div> : <div>{data[0].title}</div>}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {yes === true ? (
              <div>
                <button
                  style={{
                    color: '#fff',
                    padding: '10px 30px',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    backgroundColor: '#A2BF00',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onClick={() => router.push('/')}>
                  Start
                </button>
              </div>
            ) : (
              <div>
                <button
                  style={{
                    backgroundColor: '#A2BF00',
                    padding: '10px 30px',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    color: '#fff',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onClick={() => setYes(true)}>
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendationPage;
