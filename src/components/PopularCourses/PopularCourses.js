import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { alfaSlabOne, inter, nunito } from '@/app/main/page';
import cardImage from '../../../public/assets/CardImage.png';
import play from '../../../public/assets/play.svg';
import ImageRating from '../ImageRating/ImageRating';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './component.module.css';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

const PopularCourses = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const fetchCourses = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:8000/courses/course',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          Module: 1,
          Bank: 'Bank',
          Investment: 'Investment',
          Money: 'Money',
          Credit: 'Credit',
          Currency: null,
          Stock: null,
        },
      });
      console.log('Only bank | response:', response.data);
      setData(response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCourseJoin = (id) => {
    router.push(`/course/${id}`);
    // const fetchJoin = async () => {
    //   try {
    //     const response = await axios({
    //       method: 'post',
    //       url: `http://localhost:8000/progress/course_progress/${id}/join/?user_id=1`,
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    //     console.log('res', response.data);
    //   } catch (error) {
    //     throw error;
    //   }
    // };
    // fetchJoin();
  };
  if (data === null || data === undefined) {
    <div style={{ textAlign: 'center' }}>Loading...</div>;
  } else {
    return (
      <div className={styles.cards}>
        {data.data.slice(0, 3).map((item) => (
          <li key={item.id} className={styles.li_card_item}>
            <Image src={cardImage} className={styles.cardImage} alt="Icon of Card Image" />
            <div className={styles.textWrapper}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={`${nunito.className} ${styles.cardTitle}`}>{item.name}</div>
                <div style={{ display: 'flex' }}>
                  <Image
                    src={play}
                    style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '5px' }}
                    alt="Play Icon"
                  />
                  <div style={{ color: '#333333', marginTop: 'auto', marginBottom: 'auto' }}>
                    10x Lesson
                  </div>
                </div>
              </div>
              <div className={`${nunito.className} ${styles.cardDescription}`}>
                {item.description}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <div>
                  <ImageRating rating={item.rating} />
                </div>
                <button
                  onClick={() => handleCourseJoin(item.id)}
                  className={`${styles.joinButton} ${item.is_free ? styles.free : styles.paid}`}>
                  {item.is_free ? 'Join' : `$ ${item.cost}`}
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
};

export default PopularCourses;
