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
import CourseModules from '@/components/CourseModules/CourseModules';
import notFound from '../../../../public/assets/NoResults.jpg';
import { CourseCard } from '@/components/CourseCard/CourseCard';
import Loader from '@/components/Loader/Loader2';

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
      url: `http://86.107.44.136:8000/courses/course/get_my_courses/`,
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        user_id: 1,
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      </ProfileLayout>
    );
  } else {
    return (
      <ProfileLayout>
        <div className={`${styles.profile_main} ${poppins.variable}`}>
          {/* <div className={styles.profile_search}> */}
          {/* <input type="text" placeholder="Search or type" className={styles.input} />
            <div
              style={{
                margin: 'auto',
              }}>
              <Image src={magnifier} />
            </div> */}

          {/* <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto 30px', height: '35px' }}>
              <Image src={webIcon} />
            </div>
            <div style={{ margin: 'auto 0', height: '35px' }}>
              <Image src={notificationIcon} />
            </div>
          </div> */}
          {/* </div> */}
          <div className={styles.profile_main_inner}>
            <div className={styles.profile_search}>
              <input type="text" placeholder="Search or type" className={styles.input} />
              <div
                style={{
                  margin: 'auto',
                }}>
                <Image src={magnifier} />
              </div>
            </div>
            <div style={{ color: '#08A5D3' }}>Hi, Arnibek!</div>
            Take a step towards a better future!
            {/* <div style={{ paddingTop: '50px' }}> */}
            <Image src={profileImage} style={{ paddingTop: '50px' }} />
            {/* </div> */}
            <div
              style={{ textAlign: 'center', marginTop: '40px' }}
              className={`${inter.variable} `}>
              <CourseModules
                modules={course_type}
                width={500}
                activeModule={activeCourse}
                setActiveModule={setActiveCourse}
                mobileWidth={350}
              />
            </div>
          </div>

          {activeCourse === 1 && data.length != 0 ? (
            <ul className={poppins.variable}>
              {console.log(data)}
              <CourseCard data={data} />
            </ul>
          ) : (
            <section style={{ textAlign: 'center', marginTop: '30px', width: '990px' }}>
              <Image src={notFound} width={500} height={400} />
              <div>Sorry courses not found ;(</div>
            </section>
          )}
        </div>
      </ProfileLayout>
    );
  }
};
export default ProfileCourses;
