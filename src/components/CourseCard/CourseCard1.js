import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './component.module.css';
import Image from 'next/image';
import courseImg from '../../../public/assets/profileCourses/mycoursepic.png';
import ProgressBar from '../ProgressBar/ProgressBar';
import play from '../../../public/assets/profileCourses/playCourse.svg';
import playActive from '../../../public/assets/profileCourses/playWhite.svg';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

export const CourseCard = ({ data }) => {
  const router = useRouter();
  const { activeCourse, setActiveCourse } = useMainContext();

  return (
    <ul className={styles.main}>
      {data.map((item) => (
        <li className={styles.card} key={item.id}>
          <Image src={courseImg} className={styles.courseImage} />
          <button onClick={() => router.push(`/course/${item.id}`)} className={styles.courseButton}>
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
              <div className={styles.progressNum}>{item.progress}%</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
