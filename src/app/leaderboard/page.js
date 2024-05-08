'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { alfaSlabOne } from '../../fonts/index';
import playCourse from '../../../public/assets/PlayCourse.svg';
import bookmark from '../../../public/assets/bookmarkCourse.svg';
import LessonCard from '@/components/LessonCard/LessonCard1';
import styles from './page.module.css';
import backButton from '../../../public/assets/courseBackButton.svg';
import axios from 'axios';
import QuizCard from '@/components/QuizCard/QuizCard';
import { useRouter } from 'next/navigation';
import bookmarkInactive from '../../../public/assets/bookmarkInactive.svg';
import { poppins } from '@/fonts';

import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import Loader from '@/components/Loader/Loader2';
import Header from '@/components/Header/Header';

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
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   try {
  //     const fetchLeaderboard = async () => {
  //       const response = await axios({
  //         method: 'get',
  //         url: 'http://localhost:8000/progress/quiz_progress/leaderboard/?user_id=1',
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  //       setData(response.data);
  //     };
  //     fetchLeaderboard();
  //   } catch (error) {
  //     throw error;
  //   }
  // }, []);
  // console.log(data);
  const [active, setActive] = useState(false);
  const router = useRouter();
  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className={alfaSlabOne.variable}>
        <ProfileLayout>
          <div className={poppins.className}>
            <div className={styles.leaderboardMain}>
              <div className={styles.leaderboardTitle}>Leaderboard</div>
              <div className={styles.leaderboardDescription}>The best results of each Quiz</div>
              <ul className={styles.ul}>
                {data.map((item, key) => (
                  <li
                    key={data.id}
                    style={{ display: 'flex', fontWeight: '600', justifyContent: 'space-between' }}
                    className={styles.leaderboard_item}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ margin: 'auto 0' }}>
                        <div
                          style={{
                            margin: '0px 10px',
                            borderRadius: '18px',
                            padding: '3px 11px',
                            width: '8px',
                            textAlign: 'center',
                            backgroundColor: `${item.rounded}`,
                          }}
                          key={data.id}>
                          {item.id}
                        </div>
                      </div>
                      <div
                        className={styles.leaderboardItemTitle}
                        style={{ margin: 'auto 10px', color: `${item.color}` }}
                        key={data.id}>
                        {item.title}
                      </div>
                    </div>
                    <div
                      className={styles.leaderboardItemTitle}
                      style={{ margin: 'auto 10px', color: `${item.color}` }}
                      key={data.id}>
                      {item.percentage}%
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ProfileLayout>
      </div>
    );
  }
};

export default Leaderboard;
