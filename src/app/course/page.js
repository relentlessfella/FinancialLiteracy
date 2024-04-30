'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import courseImage from '../../../public/assets/CourseImage.png';
import { alfaSlabOne } from '../main/page';
import playCourse from '../../../public/assets/PlayCourse.svg';
import bookmark from '../../../public/assets/bookmarkCourse.svg';
import LessonCard from '@/components/LessonCard/LessonCard1';
import styles from './page.module.css';
import backButton from '../../../public/assets/courseBackButton.svg';
import axios from 'axios';
import bookmarkInactive from '../../../public/assets/bookmarkInactive.svg';

const CoursePage = () => {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(false);
  const fetchAllCards = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://86.107.44.136:8000/courses/course/',
        headers: {
          'Content-Type': 'application/json',
        },
        // params: {
        //   Module: 1,
        //   Bank: category.Bank,
        //   Investment: category.Investment,
        //   Money: category.Money,
        //   Credit: category.Credit,
        //   Currency: category.Currency,
        //   Stock: category.Stock,
        // },
      });
      setData(response.data);
      console.log(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // fetchAllCards();
  }, []);

  if (data === null) {
    return <div style={{ color: 'red' }}>Loading...</div>;
  } else {
    return (
      // <div className={alfaSlabOne.variable}>
      //   <div className={styles.backgroundCourseImage}></div>
      //   <div className={styles.container}>
      //     <Image style={{ margin: '8px 10px' }} src={backButton} width={22} height={22} />
      //     <div>
      //       <div style={{ display: 'flex' }}>
      //         <div>Level 1</div>
      //       </div>
      //       <div>Basic Understanding of Financial Literacy</div>
      //       <div style={{ marginTop: '50px', display: 'flex' }}>
      //         <button className={styles.startLessonBtn}>
      //           <Image src={playCourse} width={20} height={20} style={{ margin: 'auto 8px' }} />
      //           <div style={{ margin: 'auto 0' }}>Start Lesson</div>
      //         </button>
      //         <button
      //           className={active === true ? styles.startLessonBtn : styles.bookmarkBtn}
      //           onClick={() => setActive(!active)}
      //           style={{ margin: '0 50px' }}>
      //           {/* <Image src={bookmark} width={20} height={20} style={{ margin: 'auto 8px' }} /> */}
      //           <Image
      //             src={bookmarkInactive}
      //             width={20}
      //             height={20}
      //             style={{ margin: 'auto 8px' }}
      //           />
      //           <div style={{ margin: 'auto 0' }}>Bookmark</div>
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      //   <div style={{ minHeight: '100vh' }}>
      //     <LessonCard />
      //   </div>
      // </div>
      <div>Heeeh</div>
    );
  }
};

export default CoursePage;
