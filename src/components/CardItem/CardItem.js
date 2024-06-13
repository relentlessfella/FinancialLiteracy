'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Loader from '../Loader/Loader2';
import NotFound from '../NotFound/NotFound';
import { nunito, poppins } from '@/fonts';
import star from '@assets/star.svg';
import styles from './component.module.css';
import card1 from '@assets/Cards/card1.png';
import card2 from '@assets/Cards/card2.png';
import card3 from '@assets/Cards/card3.png';
import card4 from '@assets/Cards/card4.png';
import card5 from '@assets/Cards/card5.png';
import card6 from '@assets/Cards/card6.png';
import card7 from '@assets/Cards/card7.png';
import card8 from '@assets/Cards/card8.png';
import card9 from '@assets/Cards/card9.png';
import card10 from '@assets/Cards/card10.png';
import card11 from '@assets/Cards/card11.png';
import card12 from '@assets/Cards/card12.png';
import card13 from '@assets/Cards/card13.png';
import card14 from '@assets/Cards/card14.png';
import card15 from '@assets/Cards/card15.png';
import card18 from '@assets/Cards/card18.png';

const CardItem = ({ data, isLoading }) => {
  const router = useRouter();

  const images = [
    { id: 1, image: card1 },
    { id: 2, image: card2 },
    { id: 3, image: card3 },
    { id: 4, image: card4 },
    { id: 5, image: card5 },
    { id: 6, image: card6 },
    { id: 7, image: card7 },
    { id: 8, image: card8 },
    { id: 9, image: card9 },
    { id: 10, image: card10 },
    { id: 11, image: card11 },
    { id: 12, image: card12 },
    { id: 13, image: card13 },
    { id: 14, image: card14 },
    { id: 15, image: card15 },
    { id: 17, image: card18 },
  ];

  const handleCourseJoin = (id) => {
    router.push(`/course/${id}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className={styles.cards}>
      {data.map((item) => {
        const cardImage = images.find((img) => img.id === item.id);
        return (
          <li key={item.id} className={styles.li_card_item}>
            <div className={styles.rating}>
              <div style={{ margin: 'auto 0', marginRight: '10px' }}>
                <Image src={star} alt="star" />
              </div>
              <div style={{ margin: 'auto 0', fontSize: '20px' }}>
                {parseFloat(item.rating.toFixed(1))}
                {console.log('this is data', item)}
              </div>
            </div>
            {cardImage && (
              <Image src={cardImage.image} className={styles.cardImage} alt="Icon of Card Image" />
            )}
            <div className={styles.textWrapper}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={`${poppins.className} ${styles.cardTitle}`}>{item.name}</div>
              </div>
              <div className={`${nunito.className} ${styles.cardDescription}`}>
                {item.description}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5px 20px 20px 20px',
              }}>
              <button
                onClick={() => handleCourseJoin(item.id)}
                className={`${styles.joinButton} ${item.is_free ? styles.free : styles.paid}`}>
                {item.is_free ? 'Join' : `$ ${item.cost}`}
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default CardItem;
