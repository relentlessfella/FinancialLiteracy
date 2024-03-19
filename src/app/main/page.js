'use client';
import React from 'react';
import Image from 'next/image';
import explore from '../../../public/assets/explore.png';
import mainRight from '../../../public/assets/mainRight.png';
import { Alfa_Slab_One, Inter, Nunito } from 'next/font/google';
import './MainPage.css';
import PopularCourses from '@/components/PopularCourses/PopularCourses';
import CourseModules from '@/components/CourseModules/CourseModules';
import CourseCategory from '@/components/CourseCategory/CourseCategory';
import ContactUs from '@/components/ContactUs/ContactUs';
import CardItem from '@/components/CardItem/CardItem';

export const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alfaSlabOne',
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
});
export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-nunito',
});

const MainPage = () => {
  return (
    <div style={{ marginBottom: '100px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #D9D9D9',
        }}>
        <Image src={explore} alt="Text on the main page" />
        <Image src={mainRight} alt="Photo of 4 people" />
      </div>
      <div>
        {/* Popular Courses */}
        <PopularCourses />
        {/* Popular Courses */}

        <div>
          {/* Course Modules */}
          <CourseModules />
          {/* Course Modules */}

          {/* Course Category */}
          <CourseCategory />
          {/* Course Category */}

          {/* All Courses  */}
          <div
            style={{
              marginTop: '50px',
              display: 'flex',
              // alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
            className={inter.className}>
            <ul
              style={{
                display: 'flex',
                // alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              className="ul_main_page">
              <CardItem />
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
