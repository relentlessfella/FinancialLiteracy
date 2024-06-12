import React from 'react';
import styles from './component.module.css';
import Image from 'next/image';
import inactive from '@assets/game/cardBack.svg';

export const SingleGameCard = ({ image, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(image);
    }
  };
  return (
    <div className={styles.card}>
      <div onClick={handleClick} className={flipped ? styles.flipped : styles.cardInner}>
        <Image
          height={250}
          width={250}
          layout="responsive"
          src={image.src}
          alt={'Card front'}
          className={styles.front}
          draggable={false}
        />
        <Image
          height={250}
          width={250}
          // layout="responsive"
          src={inactive}
          alt={'Card back'}
          // style={{ backgroundColor: '#D9D9D9' }}
          style={{ backgroundColor: '#fff' }}
          className={styles.back}
          draggable={false}
        />
      </div>
    </div>
  );
};
