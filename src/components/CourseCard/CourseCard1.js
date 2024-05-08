import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './component.module.css';
import Image from 'next/image';
import courseImg from '../../../public/assets/profileCourses/mycoursepic.png';
import ProgressBar from '../ProgressBar/ProgressBar';
import play from '../../../public/assets/profileCourses/playCourse.svg';
import playActive from '../../../public/assets/profileCourses/playWhite.svg';

export const CourseCard = ({ data }) => {
  const router = useRouter();
  // const data = [
  //   {
  //     name: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
  //     progress: 100,
  //   },
  // ];
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
