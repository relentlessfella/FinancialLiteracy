'use client';
import React, { useEffect, useState } from 'react';
import { alfaSlabOne } from '@/fonts';
import styles from '../page.module.css';
import backButton from '@assets/courseBackButton.svg';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const QuizLayout = ({ children, data }) => {
  //   const [useData, setData] = useState({ id: null });
  //   useEffect(() => {
  //     localStorage.setItem('id', data.results[0].course_id);
  //   }, []);
  //   try {
  //     useEffect(() => {
  //       const id = localStorage.getItem('id');
  //       if (id) {
  //         setData((prevState) => ({
  //           ...prevState,
  //           id: id,
  //         }));
  //       }
  //     }, []);
  //     console.log('st', JSON.stringify(useData['id']));
  //   } catch (error) {
  //     throw error;
  //   }
  const params = useParams();
  // console.log(params);

  return (
    <div>
      <div className={alfaSlabOne.variable}>
        <div className={styles.description}>
          <div className={styles.container}>
            <Image
              style={{ margin: '8px 10px' }}
              src={backButton}
              width={22}
              height={22}
              alt="Back button image"
            />
            <div>
              <div style={{ display: 'flex' }}>
                <div className={styles.quiztitle}>Big Quiz</div>
              </div>
              <div className={styles.quizDescription}>
                Basic Understanding of Financial Literacy
              </div>
            </div>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default QuizLayout;
