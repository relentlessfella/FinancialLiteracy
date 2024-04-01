import React from 'react';
import styles from './page.module.css';
import coinTeacher from '../../../public/assets/coinTeacher.png';
import Image from 'next/image';

const OrientationPage = () => {
  const data = [
    {
      title: (
        <>
          Hello, My Friend! <br /> I'm Mr. Tenge, your guide through the exciting world of learning.
          Are you ready to embark on a journey to discover new knowledge and skills?"
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
          <div>{data[0].title}</div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default OrientationPage;
