'use client';
import React from 'react';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import joyStick from '@assets/game/joy_stick.png';
import instructionImage from '@assets/game/instructionImage.svg';
import styles from './page.module.css';
import { alfaSlabOne } from '@/fonts';
import ContactUs from '@/components/ContactUs/ContactUs';
import { poppins } from '@/fonts';
import { useRouter } from 'next/navigation';

const Game = () => {
  const router = useRouter();
  const instructionText = [
    {
      id: 1,
      title: (
        <>
          Click on the cards to turn them <br /> over. You can flip two cards in one turn.
        </>
      ),
    },
    {
      id: 2,
      title: (
        <>
          If the cards match, they remain
          <br /> open. If not, the cards are turned back face down.
        </>
      ),
    },
    {
      id: 3,
      title: (
        <>
          The game ends when all pairs are
          <br /> found.
        </>
      ),
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.backgroundImage}>
        <div className={styles.imageInner}>
          <div className={styles.textWrapper}>
            <div className={`${styles.imageText} ${alfaSlabOne.className}`}>
              Play smart, save
              <br /> wisely, master <br />
              <span style={{ color: '#FE602F' }}>financial</span>{' '}
              <span style={{ color: '#A2BF00' }}>literacy</span>
            </div>
          </div>
          <Image src={joyStick} width={500} height={600} />
        </div>
      </div>
      <div className={styles.instructionCard}>
        <Image src={instructionImage} />
        <div className={styles.instructionText}>
          <div
            className={alfaSlabOne.className}
            style={{ color: '#FE602F', fontSize: '38px', margin: '20px 0' }}>
            Card Game
          </div>
          <div className={styles.instructionTextGoal}>
            <span style={{ color: '#FE602F' }}>Goal:</span>{' '}
            <span style={{ color: '#333333', opacity: 0.84 }}>
              find all pairs of identical cards on
              <br /> the playing field.
            </span>
          </div>
          <div style={{ color: '#FE602F', fontSize: '20px', margin: '20px 0' }}>How to play?</div>
          {instructionText.map((item) => (
            <div
              style={{
                display: 'flex',
                textAlign: 'initial',
                fontSize: '22px',
                color: '#333333',
                opacity: 0.84,
                wordSpacing: '2px',
              }}
              key={item.id}>
              <div style={{ width: '19px', padding: '0 5px' }}>{item.id}.</div>
              <div style={{ padding: '0 10px', width: '420px' }}>{item.title}</div>
            </div>
          ))}
          <button
            className={`${styles.button} ${poppins.className}`}
            onClick={() => router.push('/game-instructions/game')}>
            Play
          </button>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Game;
