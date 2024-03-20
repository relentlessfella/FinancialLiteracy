'use client';
import React, { useEffect, useState } from 'react';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import Image from 'next/image';
import webIcon from '../../../../public/assets/web.svg';
import profileImage from '../../../../public/assets/profileImage.png';
import notificationIcon from '../../../../public/assets/profileIcons/notificationIcon.svg';
import styles from './component.module.css';
import magnifier from '../../../../public/assets/magnifier.svg';
import axios from 'axios';
import { inter } from '@/app/main/page';
import { poppins } from '@/app/login/page';
import { useRouter } from 'next/navigation';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

const ProfileCourses = () => {
  const { activeCourse, setActiveCourse } = useMainContext();
  const router = useRouter();
  const [data, setData] = useState(null);
  const course_type = [
    {
      id: 1,
      title: 'Current Courses',
    },
    {
      id: 2,
      title: 'Completed Courses',
    },
  ];
  const fetchUserCourses = async () => {
    const response = await axios({
      method: 'get',
      url: `http://127.0.0.1:8000/courses/course/`,
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        Module: 1,
      },
    });
    setData(response.data);
    console.log(response);
  };
  useEffect(() => {
    fetchUserCourses();
  }, []);
  if (data === null) {
    return (
      <ProfileLayout>
        <div style={{ textAlign: 'center' }}>Loading...</div>
      </ProfileLayout>
    );
  } else {
    return (
      <ProfileLayout>
        <div className={`${styles.profile_main} ${poppins.variable}`}>
          <div className={styles.profile_search}>
            <input type="text" placeholder="Search or type" className={styles.input} />
            <div
              style={{
                margin: 'auto',
              }}>
              <Image src={magnifier} />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto 30px', height: '35px' }}>
              <Image src={webIcon} />
            </div>
            <div style={{ margin: 'auto 0', height: '35px' }}>
              <Image src={notificationIcon} />
            </div>
          </div>
        </div>
        <div style={{ fontWeight: '1000', color: '#86D521', fontSize: '32px', marginTop: '80px' }}>
          <div style={{ color: '#08A5D3' }}>Hi, Arnibek!</div>
          Take a step towards a better future!
          <div style={{ paddingTop: '50px' }}>
            <Image src={profileImage} />
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }} className={`${inter.variable} `}>
          <ul className={styles.main}>
            {course_type.map((item) => (
              <li
                className={activeCourse === item.id ? styles.course_active : styles.course_inactive}
                onClick={() => setActiveCourse(item.id)}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <ul className={poppins.variable}>
          {data.map((item) => (
            <li className={styles.profileLessonCard}>
              <div
                style={{
                  fontSize: '28px',
                  color: '#FE602F',
                  fontWeight: '1000',
                  margin: '20px 0',
                }}>
                Course name:
                <br /> {item.name}
              </div>
              <div
                style={{ fontSize: '18px', color: '#1F1C14', opacity: '0.7', padding: '20px 0' }}>
                {item.description}
              </div>
              <div>
                <button
                  onClick={() => router.push(`/course/${item.id}`)}
                  style={{
                    color: '#fff',
                    backgroundColor: '#A2BF00',
                    border: 'none',
                    borderRadius: '15px',
                    float: 'right',
                    padding: '10px 30px',
                    marginTop: '30px',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '16px',
                  }}>
                  Continue
                </button>
              </div>
            </li>
          ))}
        </ul>
      </ProfileLayout>
    );
  }
};
export default ProfileCourses;
