'use client';
import React, { useEffect, useState } from 'react';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import Image from 'next/image';
import webIcon from '@assets/web.svg';
import profileImage from '@assets/profileImage.png';
import notificationIcon from '@assets/profileIcons/notificationIcon.svg';
import styles from './component.module.css';
import magnifier from '@assets/magnifier.svg';
import axios from 'axios';
import { inter } from '@/fonts';
import { alfaSlabOne } from '@/fonts';
import { useRouter } from 'next/navigation';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import CourseModules from '@/components/CourseModules/CourseModules';
import notFound from '@assets/NoResults.jpg';
import { CourseCard } from '@/components/CourseCard/CourseCard1';
import Loader from '@/components/Loader/Loader2';
import { poppins } from '@/fonts';
import useLocalStorage from '@/configs/axios/sessionStorage/useLocalStorage';
import { getUserFromLocalCookie } from '@/lib/auth';

const ProfileCourses = () => {
  const { activeCourse, setActiveCourse } = useMainContext();
  const router = useRouter();
  // const userID = useLocalStorage('UserID');
  const { id } = getUserFromLocalCookie();
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
  const profileCourseModule = {
    module: {
      padding: '10px 20px',
      fontSize: '14px',
    },
    module_active: {
      padding: '10px 20px',
      fontSize: '14px',
    },
    main: {
      padding: '15px',
    },
  };
  const fetchUserCourses = async () => {
    const response = await axios({
      method: 'get',
      url: `http://localhost:8000/courses/course/get_my_courses/`,
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        user_id: id,
      },
    });
    setData(response.data);
    window.scrollTo(0, 0);
    console.log(response);
  };
  useEffect(() => {
    if (id === undefined) {
      return router.push('/login');
    } else {
      fetchUserCourses();
    }
  }, []);

  if (data === null) {
    return (
      <ProfileLayout>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
      </ProfileLayout>
    );
  } else {
    const filteredData =
      activeCourse === 1
        ? data.filter((item) => item.status === 'LEARNING')
        : activeCourse === 2
        ? data.filter((item) => item.status === 'COMPLETED')
        : data;
    return (
      <ProfileLayout>
        <div className={`${styles.profile_main} ${poppins.variable}`}>
          <div className={styles.profile_main_inner}>
            <div
              style={{ color: '#FE602F', textAlign: 'center', fontSize: '38px' }}
              className={alfaSlabOne.className}>
              My Courses
            </div>
            <div className={`${inter.variable} ${styles.moduleProfile}`}>
              <CourseModules
                modules={course_type}
                width={600}
                activeModule={activeCourse}
                setActiveModule={setActiveCourse}
                mobileWidth={350}
                moduleStyles={profileCourseModule}
              />
            </div>
          </div>

          {filteredData.length != 0 ? (
            <ul className={poppins.variable}>
              <CourseCard data={filteredData} />
            </ul>
          ) : (
            <section className={styles.notFoundSection}>
              <Image src={notFound} layout="responsive" alt="Not found image" />
              <div>You don&apos;t have active courses ;(</div>
            </section>
          )}
        </div>
      </ProfileLayout>
    );
  }
};
export default ProfileCourses;
