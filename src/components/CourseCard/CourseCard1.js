import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './component.module.css';
import Image from 'next/image';
import courseImg from '../../../public/assets/profileCourses/mycoursepic.png';
import ProgressBar from '../ProgressBar/ProgressBar';
import play from '../../../public/assets/profileCourses/playCourse.svg';
import playActive from '../../../public/assets/profileCourses/playWhite.svg';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
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

export const CourseCard = ({ data }) => {
  const router = useRouter();
  const { activeCourse, setActiveCourse } = useMainContext();
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
  return (
    <ul className={styles.main}>
      {data.map((item) => {
        const cardImage = images.find((img) => img.id === item.id);
        return (
          <li className={styles.card} key={item.id}>
            {cardImage && <Image src={cardImage.image} className={styles.courseImage} />}
            <button
              onClick={() => router.push(`/course/${item.id}`)}
              className={styles.courseButton}>
              <Image src={play} className={styles.playInactive} />
              <Image src={playActive} className={styles.playActiveImg} />
              <div style={{ margin: 'auto 0' }}>Continue</div>
            </button>
            <div className={styles.progressWrapper}>
              <div style={{ opacity: '0.6', fontWeight: '500' }}>
                <div>Course name:</div>
                <div>{item.name}</div>
              </div>
              <div className={styles.progress}>
                <div style={{ margin: 'auto 0' }}>
                  <ProgressBar value={item.progress} width={200} />
                </div>
                <div className={styles.progressNum}>{parseInt(item.progress)}%</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
