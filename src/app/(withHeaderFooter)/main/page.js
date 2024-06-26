'use client';
import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import explore from '@assets/explore.svg';
import mainRight from '@assets/mainRight.svg';
import PopularCourses from '@/components/PopularCourses/PopularCourses';
import CourseModules from '@/components/CourseModules/CourseModules';
import CourseCategory from '@/components/CourseCategory/CourseCategory';
import CardItem from '@/components/CardItem/CardItem';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import styles from './page.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Layout from '../layout';
import Filter from '@/components/Filter/Filter';
import { alfaSlabOne, inter } from '@/fonts';
import { useFetchUser } from '@/contexts/authContext/authContext';
import { getUserFromLocalCookie } from '@/lib/auth';
import Loader from '@/components/Loader/Loader2';
import withAuth from '@/components/withAuth/withAuth';

const modules = [
  { id: 1, title: 'Level 1' },
  { id: 2, title: 'Level 2' },
  { id: 3, title: 'Level 3' },
];

const MainPage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  // const [userData, setUserData] = useState(null);
  const { category, activeModule, setActiveModule } = useMainContext();
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading } = useFetchUser();
  const { id } = getUserFromLocalCookie();
  const mainCourseModule = {
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

  // const fetchActiveUser = async () => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       url: 'http://localhost:8000/user/active_user/',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       withCredentials: true,
  //     });
  //     setUserData(response.data);
  //     console.log(response);
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        setIsLoading(true);
        const response = await axios({
          method: 'get',
          url: 'http://localhost:8000/courses/course/',
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            Module: activeModule,
            Bank: category.Bank,
            Investment: category.Investment,
            Money: category.Money,
            Credit: category.Credit,
            Currency: category.Currency,
            Stock: category.Stock,
          },
        });
        if (response.data && response.data.length > 0) {
          setData(response.data);
        } else {
          setData(undefined);
        }
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    };
    // fetchActiveUser();
    if (id === undefined) {
      router.push('/login');
    } else {
      fetchAllCards();
    }
  }, [category, activeModule]);

  return (
    <Layout>
      <div style={{ marginBottom: '100px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1420px',
            margin: '0 auto',
          }}>
          <Image
            src={explore}
            alt="Text on the main page"
            layout="responsive"
            className={styles.mainFirstimage}
          />
          <Image
            src={mainRight}
            alt="Photo of 4 people"
            layout="responsive"
            width={400}
            height={400}
            className={styles.mainSecondImage}
          />
        </div>
        <div>
          {/* Popular Courses */}
          <div className={`${alfaSlabOne.className} ${styles.Popular3Courses}`}>
            <div style={{ color: '#A2BF00', marginRight: '15px' }}>Popular</div>
            <div style={{ color: '#FE602F', whiteSpace: 'nowrap' }}>3 Courses</div>
          </div>
          <ul className={styles.ul_main_page}>
            <div
              style={{
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <PopularCourses />
            </div>
          </ul>
          {/* Popular Courses */}

          <div className={alfaSlabOne.variable}>
            {/* Course Modules */}
            <p className={styles.title}>Courses</p>
            <CourseModules
              modules={modules}
              width={550}
              activeModule={activeModule}
              setActiveModule={setActiveModule}
              mobileWidth={300}
              moduleStyles={mainCourseModule}
            />
            {/* Course Modules */}

            {/* Course Category */}
            <div>
              <CourseCategory />
              <div style={{ marginTop: '50px' }}>
                <Filter />
              </div>
            </div>
            {/* Course Category */}

            {/* All Courses  */}
            <div
              style={{
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              className={inter.className}>
              <ul className={styles.ul_main_page}>
                <CardItem data={data} isLoading={isLoading} />
              </ul>
            </div>

            {/* All Courses  */}

            {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
              <button
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#FE8863',
                  width: '160px',
                  height: '50px',
                  border: 'none',
                  color: '#fff',
                  fontSize: '16px',
                }}
                className={inter.className}>
                View More
              </button>
            </div> */}
            {/* <ContactUs /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
