'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { SingleGameCard } from '@/components/SingleGameCard/SingleGameCard';
// import { inter } from '../main/page';
import { inter } from '@/fonts';

const Game = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const cardImages = [
    { src: '/assets/game/bank.jpeg', matched: false },
    { src: '/assets/game/pig.jpeg', matched: false },
    { src: '/assets/game/wallet.jpeg', matched: false },
  ];
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceTwo(null);
    setChoiceOne(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    if (card.id === choiceOne?.id) return; //fix double click bug
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className={`${styles.main} ${inter.variable}`}>
      <div className={styles.game}>
        <button className={styles.startButton} onClick={shuffleCards}>
          New Game
        </button>
        <div className={styles.cardGrid}>
          {cards.map((image, index) => (
            <SingleGameCard
              key={index}
              image={image}
              handleChoice={handleChoice}
              flipped={image === choiceOne || image === choiceTwo || image.matched}
              disabled={disabled}
            />
          ))}
        </div>
        {/* <p>{turns}</p> */}
      </div>
    </div>
  );
};
export default Game;
