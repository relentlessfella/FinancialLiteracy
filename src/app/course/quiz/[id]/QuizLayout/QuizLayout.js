'use client';
import React, { useEffect, useState } from 'react';
import { alfaSlabOne } from '@/app/main/page';
import styles from '../page.module.css';
import backButton from '../../../../../../public/assets/courseBackButton.svg';
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
            <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
            <div>
              <div style={{ display: 'flex' }}>
                <div>Quiz {params.id} </div>
              </div>
              <div style={{ marginTop: '30px', display: 'flex' }}>
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
