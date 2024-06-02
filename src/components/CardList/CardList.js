import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Loader from '../Loader/Loader2';
import styles from './component.module.css';

const CardList = ({ fetchData, cardStyle, buttonStyle, buttonLink, constantData }) => {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setData(response);
    };
    getData();
  }, [fetchData]);

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  } else {
    return (
      <ul className={styles.ul}>
        {data &&
          data.map((item) => (
            <li className={styles.card} key={item.id}>
              <div style={cardStyle.title}>{item.name}</div>
              <div style={cardStyle.description}>{item.description}</div>
              <div style={cardStyle.content}>{item.content}</div>
              <div style={cardStyle.footer}>
                <div>{item.footerText}</div>
                <button style={cardStyle.button} onClick={() => router.push(buttonLink)}>
                  {cardStyle.buttonText}
                </button>
              </div>
            </li>
          ))}
        {!data && (
          <li className={styles.card}>
            <div style={cardStyle.title}>{constantData && constantData.title}</div>
            <div style={cardStyle.content}>{constantData && constantData.content}</div>
            <div style={cardStyle.description}></div>
            <div style={cardStyle.footer}>
              {cardStyle.downloadButton && (
                <button
                  style={cardStyle.downloadButton}
                  onClick={cardStyle.handleDownload.handleDownload}>
                  <Image
                    src={cardStyle.buttonImage.download}
                    width={20}
                    height={20}
                    alt="Download image"
                  />
                </button>
              )}
              <button
                className={styles.quizButton}
                style={cardStyle.button}
                onClick={() => router.push(buttonLink)}>
                {cardStyle.buttonText}
              </button>
            </div>
          </li>
        )}
      </ul>
    );
  }
};

export default CardList;
