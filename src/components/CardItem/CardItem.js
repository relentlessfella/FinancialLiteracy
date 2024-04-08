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
import no_results from '../../../public/assets/NoResults.jpg';
import styles from './component.module.css';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

const CardItem = ({ data }) => {
  const router = useRouter();
  const handleCourseJoin = (id) => {
    router.push(`/course/${id}`);
  };
  if (data === null) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  } else if (data.length === 0) {
    return (
      <div>
        <Image src={no_results} width={500} height={400} />
        <div style={{ textAlign: 'center', fontWeight: '500', fontSize: '24px', opacity: '0.9' }}>
          Sorry courses not found ;(
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: 'flex ',
          padding: '0',
          flexWrap: 'wrap',
          maxWidth: '1759px',
          width: 'auto',
          flexDirection: 'row',
        }}>
        {data.map((item) => (
          <li
            key={item.id}
            style={{
              listStyle: 'none',
              width: '400px',
              height: '520px',
              borderRadius: '10px',
            }}
            className={styles.li_card_item}>
            <div>
              <Image src={cardImage} width={400} alt="Icon of Card Image" />
            </div>
            <div style={{ padding: '1px 20px 20px 50px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div
                    className={nunito.className}
                    style={{
                      color: '#FE8863',
                      fontSize: '24px',
                      fontWeight: '900',
                      paddingTop: '40px',
                    }}>
                    {item.name}
                  </div>
                </div>
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
              <div
                className={nunito.className}
                style={{
                  color: '#1F1C14',
                  fontSize: '14px',
                  opacity: '70%',
                  paddingTop: '20px',
                }}>
                {item.description}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <div>
                  <ImageRating rating={item.rating} />
                </div>
                {/* <Link href={`/CoursePage/${item.id}`}> */}
                {item.is_free ? (
                  <button
                    style={{
                      width: '150px',
                      height: '38px',
                      marginTop: '10px',
                      borderRadius: '47px',
                      border: 'none',
                      backgroundColor: '#A2BF00',
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '18px',
                    }}
                    onClick={() => handleCourseJoin(item.id)}
                    className={inter.className}>
                    Join
                  </button>
                ) : (
                  <button
                    style={{
                      width: '150px',
                      height: '38px',
                      marginTop: '10px',
                      borderRadius: '47px',
                      border: 'none',
                      backgroundColor: '#FE8863',
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '18px',
                    }}
                    onClick={() => handleCourseJoin(item.id)}
                    className={inter.className}>
                    $ {item.cost}
                  </button>
                )}
                {/* </Link> */}
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
};

export default CardItem;
