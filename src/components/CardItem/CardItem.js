'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import cardImage from '../../../public/assets/CardImage.png';
import ImageRating from '@/components/ImageRating/ImageRating';
import { nunito, inter } from '@/app/main/page';
import play from '../../../public/assets/play.svg';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './component.module.css';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import Loader from '../Loader/Loader2';
import NotFound from '../NotFound/NotFound';

const CardItem = ({ data, isLoading }) => {
  const router = useRouter();
  const handleCourseJoin = (id) => {
    router.push(`/course/${id}`);
  };
  if (data === null || isLoading === true) {
    return <Loader />;
  } else if (data.length === 0) {
    return <NotFound />;
  } else {
    return (
      <div className={styles.cards}>
        {data.map((item) => (
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

export default CardItem;
