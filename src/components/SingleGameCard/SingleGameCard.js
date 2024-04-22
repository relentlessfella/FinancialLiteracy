import React from 'react';
import styles from './component.module.css';
import Image from 'next/image';

export const SingleGameCard = ({ image, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(image);
    }
  };
  return (
    <div className={styles.card}>
      <div
        style={{ width: '250px' }}
        onClick={handleClick}
        className={flipped ? styles.flipped : ''}>
        <Image
          height={250}
          width={250}
          src={image.src}
          alt={'Card front'}
          className={styles.front}
          draggable={false}
        />
        <Image
          height={250}
          width={250}
          src={'/assets/game/inactive1.png'}
          alt={'Card back'}
          style={{ backgroundColor: '#D9D9D9' }}
          className={styles.back}
          draggable={false}
        />
      </div>
    </div>
  );
};
