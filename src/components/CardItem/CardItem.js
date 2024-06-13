'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import cardImage from '../../../public/assets/CardImage.png';
import ImageRating from '@/components/ImageRating/ImageRating';
// import { nunito, inter } from '@/app/main/page';
import { nunito, poppins } from '@/fonts';
import play from '../../../public/assets/play.svg';
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import star from '@assets/star.svg';
import Link from 'next/link';
import styles from './component.module.css';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import Loader from '../Loader/Loader2';
import NotFound from '../NotFound/NotFound';
import card1 from '@assets/Cards/card1.png';
import generalImage from '@assets/main/general.png';

const CardItem = ({ data, isLoading }) => {
  const router = useRouter();
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
        data.map((item) => (
          <li key={item.id} className={styles.li_card_item}>
            <div className={styles.rating}>
              <div style={{ margin: 'auto 0', marginRight: '10px' }}>
                <Image src={star} />
              </div>
              <div style={{ margin: 'auto 0', fontSize: '20px' }}>
                {parseFloat(item.rating.toFixed(1))}
              </div>
            </div>
            <Image
              src={card1}
              // width={400}
              // height={221}
              className={styles.cardImage}
              alt="Icon of Card Image"
            />
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
              {/* <div>
                  <ImageRating rating={item.rating} />
                </div> */}
              <button
                onClick={() => handleCourseJoin(item.id)}
                className={`${styles.joinButton} ${item.is_free ? styles.free : styles.paid}`}>
                {item.is_free ? 'Join' : `$ ${item.cost}`}
              </button>
            </div>
          </li>
        ))}
    </div>
  );
};

export default CardItem;
