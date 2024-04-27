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
import Loader from '../Loader/Loader2';
import NotFound from '../NotFound/NotFound';

const PopularCourses = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'get',
        url: 'http://86.107.44.136:8000/courses/course',
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
      if (response.data && response.data.length > 0) {
        setData(response.data);
      } else {
        setData(undefined);
      }
    } catch (error) {
      setData(undefined);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCourseJoin = (id) => {
    router.push(`/course/${id}`);
  };
  if (isLoading) {
    return <Loader />;
  }
  if (data === undefined) {
    return <NotFound />;
  }
  return (
    <div className={styles.cards}>
      {data &&
        data.slice(0, 3).map((item) => (
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
};

export default PopularCourses;
