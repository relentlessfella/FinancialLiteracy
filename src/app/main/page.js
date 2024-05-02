'use client';
import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import explore from '../../../public/assets/explore.png';
import mainRight from '../../../public/assets/mainRight.png';
import { Alfa_Slab_One, Inter, Nunito, DM_Sans } from 'next/font/google';
import PopularCourses from '@/components/PopularCourses/PopularCourses';
import CourseModules from '@/components/CourseModules/CourseModules';
import CourseCategory from '@/components/CourseCategory/CourseCategory';
import ContactUs from '@/components/ContactUs/ContactUs';
import CardItem from '@/components/CardItem/CardItem';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import styles from './page.module.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Filter from '@/components/Filter/Filter';
import Loader from '@/components/Loader/Loader2';
import dynamic from 'next/dynamic';
import { alfaSlabOne, inter, nunito, DMSans } from '@/fonts';

const modules = [
  { id: 1, title: 'Level 1' },
  { id: 2, title: 'Level 2' },
  { id: 3, title: 'Level 3' },
];

const MainPage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const { category, activeModule, setActiveModule } = useMainContext();
  const [isLoading, setIsLoading] = useState(false);
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

  const fetchActiveUser = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:8000/user/active_user/',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      setUserData(response.data);
      console.log(response);
    } catch (error) {
      throw error;
    }
  };
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
    fetchActiveUser();
    fetchAllCards();
  }, [category, activeModule]);

  return (
    <div style={{ marginBottom: '100px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #D9D9D9',
          width: '100%',
          maxWidth: '1200px',
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
          <div style={{ color: '#FE8863', whiteSpace: 'nowrap' }}>3 Courses</div>
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
            width={450}
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

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
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
          </div>

          {/* Contact Us */}
          {/* <ContactUs /> */}
          {/* Contact Us */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
