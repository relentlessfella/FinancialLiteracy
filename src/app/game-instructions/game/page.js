'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { SingleGameCard } from '@/components/SingleGameCard/SingleGameCard';
import { inter } from '@/fonts';
import Header from '@/components/Header/Header';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const Game = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [gameWon, setGameWon] = useState(false);
  const { width, height } = useWindowSize();
  const cardImages = [
    // { src: '/assets/game/bank.jpeg', matched: false },
    // { src: '/assets/game/pig.jpeg', matched: false },
    // { src: '/assets/game/wallet.jpeg', matched: false },
    { src: '/assets/game/ruble.jpg', matched: false },
    { src: '/assets/game/yuan.jpg', matched: false },
    { src: '/assets/game/euro.jpg', matched: false },
    { src: '/assets/game/lira.jpg', matched: false },
    { src: '/assets/game/won.jpg', matched: false },
    { src: '/assets/game/yen.jpg', matched: false },
  ];
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceTwo(null);
    setChoiceOne(null);
    setCards(shuffledCards);
    setTurns(0);
    setGameWon(false);
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

  useEffect(() => {
    // Check if all cards are matched
    if (cards.length && cards.every((card) => card.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  useEffect(() => {
    if (gameWon) {
      setTimeout(() => shuffleCards(), 3500); // Wait 2 seconds before reshuffling
    }
  }, [gameWon]);

  return (
    <div>
      <Header />
      <div className={`${styles.main} ${inter.variable}`}>
        <div className={styles.game}>
          {/* <button className={styles.startButton} onClick={shuffleCards}>
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
            ))} */}
          {gameWon && <Confetti width={width} height={height} />}
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
    </div>
  );
};
export default Game;
