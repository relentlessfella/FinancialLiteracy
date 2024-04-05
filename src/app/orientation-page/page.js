'use client';
import React from 'react';
import styles from './page.module.css';
import coinTeacher from '../../../public/assets/coinTeacher.png';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const OrientationPage = () => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const router = useRouter();
  const data = [
    {
      title: (
        <>
          Hello, <span style={{ color: '#FE602F' }}>My Friend</span>! <br /> I'm{' '}
          <span style={{ color: '#FE602F' }}>Mr. Tenge</span>, your guide through the exciting world
          of learning. Are you ready to embark on a journey to discover new knowledge and skills?"
        </>
      ),
    },
    {
      title: (
        <>
          "Fantastic! Let's start with a short test to gauge your interests and current level of
          knowledge. It's quick and fun, I promise! "
        </>
      ),
    },
    {
      title: (
        <>
          'Ok, then you can go to the main page of our website, where you have a lot of resources
          and information at your disposal.'
        </>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image src={coinTeacher} width={300} height={300} />
        <div className={styles.chat_card}>
          {yes === true ? (
            <div>{data[1].title}</div>
          ) : no === true ? (
            <div>{data[2].title}</div>
          ) : (
            <div>{data[0].title}</div>
          )}
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
                  onClick={() => router.push('/orientation-page/quiz')}>
                  Start
                </button>
              </div>
            ) : no === true ? (
              <div>
                <button
                  style={{
                    color: '#fff',
                    padding: '10px 10px',
                    border: 'none',
                    borderRadius: '8px',
                    backgroundColor: '#A2BF00',
                    fontWeight: '700',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onClick={() => router.push('/')}>
                  Main Page
                </button>
              </div>
            ) : (
              <div>
                <button
                  style={{
                    color: '#FE602F',
                    padding: '10px 30px',
                    border: 'none',
                    borderRadius: '8px',
                    backgroundColor: 'transparent',
                    fontWeight: '700',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onClick={() => setNo(true)}>
                  No
                </button>
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
                  Yes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrientationPage;
