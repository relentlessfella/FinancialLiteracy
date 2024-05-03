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
// import { inter } from '@/app/main/page';
import { inter } from '@/fonts';
import { alfaSlabOne } from '@/fonts';
import { poppins } from '@/app/login/page';
import { useRouter } from 'next/navigation';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import CourseModules from '@/components/CourseModules/CourseModules';
import notFound from '../../../../public/assets/NoResults.jpg';
import { CourseCard } from '@/components/CourseCard/CourseCard1';
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
      </ProfileLayout>
    );
  } else {
    return (
      <ProfileLayout>
        <div className={`${styles.profile_main} ${poppins.variable}`}>
          <div className={styles.profile_main_inner}>
            {/* <div className={styles.profile_search}>
              <input type="text" placeholder="Search or type" className={styles.input} />
              <div
                style={{
                  margin: 'auto',
                }}>
                <Image src={magnifier} alt="Magnifier icon" />
              </div>
            </div> */}
            {/* <div style={{ color: '#08A5D3' }}>Hi, Arnibek!</div> */}
            {/* Take a step towards a better future! */}
            {/* <Image src={profileImage} style={{ paddingTop: '50px' }} alt="Profile avatar image" /> */}
            <div
              style={{ color: '#FE8863', textAlign: 'center' }}
              className={alfaSlabOne.className}>
              My Courses
            </div>
            <div className={`${inter.variable} ${styles.moduleProfile}`}>
              <CourseModules
                modules={course_type}
                width={500}
                activeModule={activeCourse}
                setActiveModule={setActiveCourse}
                mobileWidth={350}
                moduleStyles={profileCourseModule}
              />
            </div>
          </div>

          {activeCourse === 1 && data.length != 0 ? (
            <ul className={poppins.variable}>
              {console.log(data)}
              <CourseCard data={data} />
            </ul>
          ) : (
            <section className={styles.notFoundSection}>
              <Image src={notFound} layout="responsive" alt="Not found image" />
              <div>Sorry courses not found ;(</div>
            </section>
          )}
        </div>
      </ProfileLayout>
    );
  }
};
export default ProfileCourses;
