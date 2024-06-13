'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import { alfaSlabOne } from '../../fonts/index';
// import playCourse from '../../../public/assets/PlayCourse.svg';
// import bookmark from '../../../public/assets/bookmarkCourse.svg';
// import LessonCard from '@/components/LessonCard/LessonCard1';
import styles from './page.module.css';
// import backButton from '../../../public/assets/courseBackButton.svg';
import axios from 'axios';
// import QuizCard from '@/components/QuizCard/QuizCard';
import { useRouter } from 'next/navigation';
// import bookmarkInactive from '../../../public/assets/bookmarkInactive.svg';
import { poppins, alfaSlabOne } from '@/fonts';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import Loader from '@/components/Loader/Loader2';
// import Header from '@/components/Header/Header';
import { getUserFromLocalCookie } from '@/lib/auth';

const Leaderboard = () => {
  const [data, setData] = useState(null);
  const { id } = getUserFromLocalCookie();
  useEffect(() => {
    try {
      const fetchLeaderboard = async () => {
        const response = await axios({
          method: 'get',
          url: `http://localhost:8000/progress/quiz_progress/leaderboard/?user_id=${id}`,
          headers: { 'Content-Type': 'application/json' },
        });
        setData(response.data);
      };
      fetchLeaderboard();
    } catch (error) {
      throw error;
    }
  }, []);
  console.log(data);
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
              <div className={styles.leaderboardTitle}>Quiz Grades</div>
              <div className={styles.leaderboardDescription}>The results of each Quiz</div>
              <ul className={styles.ul}>
                {data.map((item, key) => (
                  <li
                    key={data.id}
                    style={{ display: 'flex', fontWeight: '600', justifyContent: 'space-between' }}
                    className={styles.leaderboard_item}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ margin: 'auto 0', borderRight: '1px solid #D9D9D9' }}>
                        <div
                          style={{
                            margin: '0px 10px',
                            borderRadius: '18px',
                            padding: '3px 11px',
                            width: '8px',
                            textAlign: 'center',

                            // backgroundColor: key < 3 ? '#A2BF00' : 'transparent',
                            backgroundColor: '#A2BF00',
                          }}
                          key={data.id}>
                          {key + 1}
                        </div>
                      </div>
                      <div
                        className={styles.leaderboardItemTitle}
                        style={{
                          margin: 'auto 10px',
                          color: '#858585',
                        }}
                        key={data.id}>
                        {item.name}
                      </div>
                    </div>
                    <div
                      className={styles.leaderboardItemTitle}
                      style={{ margin: 'auto 10px', color: '#A2BF00' }}
                      key={data.id}>
                      Grade&nbsp;
                      {parseInt(item.grade.toFixed(1))}%{/* {item.grade}% */}
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
