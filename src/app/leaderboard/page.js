'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { alfaSlabOne } from '../main/page';
import playCourse from '../../../public/assets/PlayCourse.svg';
import bookmark from '../../../public/assets/bookmarkCourse.svg';
import LessonCard from '@/components/LessonCard/LessonCard1';
import styles from './page.module.css';
import backButton from '../../../public/assets/courseBackButton.svg';
import axios from 'axios';
import QuizCard from '@/components/QuizCard/QuizCard';
import { useRouter } from 'next/navigation';
import bookmarkInactive from '../../../public/assets/bookmarkInactive.svg';
import { poppins } from '@/app/login/page';

const Leaderboard = () => {
  const data = [
    {
      id: 1,
      title: 'Quiz 3: Budgeting Mastery: Learning to Manage Your Money Effectively',
      percentage: 100,
      color: '#A2BF00',
      rounded: '#A2BF00',
    },
    {
      id: 2,
      title: 'Quiz 5: Budgeting Mastery: Learning to Manage Your Money Effectively',
      percentage: 95,
      color: '#A2BF00',
      rounded: '#A2BF00',
    },
    {
      id: 3,
      title: 'Quiz 1: Basic Understanding of Financial Literacy ',
      percentage: 85,
      color: '#A2BF00',
      rounded: '#A2BF00',
    },
    {
      id: 4,
      title: 'Quiz 2: From A to Z in Money Matters: Financial Skills for Teens ',
      percentage: 75,
      color: '#858585',
    },
    {
      id: 5,
      title: 'Quiz 7: Budgeting Mastery: Learning to Manage Your Money Effectively ',
      percentage: 70,
      color: '#858585',
    },
    {
      id: 6,
      title: 'Quiz 4: Teen Investing: Smart Resource Allocation Skills ',
      percentage: 65,
      color: '#858585',
    },
  ];
  //   const [data, setData] = useState(null);
  const [active, setActive] = useState(false);
  const router = useRouter();
  if (data === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={alfaSlabOne.variable}>
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
              <div> Arnibek&apos;s {data.id}</div>
            </div>
            <div>{data.name}</div>
            <div style={{ marginTop: '50px', display: 'flex' }}>Achievement Leaderboard</div>
          </div>
        </div>
        <div className={poppins.className}>
          <div
            className={styles.quizMain}
            style={{
              display: 'flex',
              width: '1000px',
              margin: '75px auto',
              textAlign: 'center',
              fontWeight: '1000',
              borderRadius: '10px',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <div
              style={{
                marginTop: '60px',
                marginBottom: '10px',
                color: '#FE602F',
                fontSize: '28px',
              }}>
              Leaderboard
            </div>
            <div style={{ color: '#858585', fontWeight: '400', margin: '20px 0' }}>
              The best results of each Quiz
            </div>
            <ul
              style={{
                listStyleType: 'none',
                padding: '0',
                margin: '0 auto',
                marginBottom: '30px',
                width: '800px',
                textAlign: 'start',
              }}>
              {data.map((item) => (
                <li
                  key={data.id}
                  style={{ display: 'flex', fontWeight: '600', justifyContent: 'space-between' }}
                  className={styles.leaderboard_item}>
                  <div style={{ display: 'flex' }}>
                    <div
                      style={{
                        margin: '0px 10px',
                        borderRadius: '18px',
                        padding: '3px 11px',
                        width: '8px',
                        textAlign: 'center',
                        backgroundColor: `${item.rounded}`,
                      }}>
                      {item.id}
                    </div>
                    <div style={{ margin: 'auto 10px', color: `${item.color}` }}>{item.title}</div>
                  </div>
                  <div style={{ margin: 'auto 10px', color: `${item.color}` }}>
                    {item.percentage}%
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Leaderboard;
