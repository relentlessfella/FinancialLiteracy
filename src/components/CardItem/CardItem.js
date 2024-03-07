import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import cardImage from '../../../public/assets/CardImage.png';
import ImageRating from '@/components/ImageRating/ImageRating';
import { nunito, inter } from '@/app/main/page';
import play from '../../../public/assets/play.svg';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

const CardItem = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { category, activeModule } = useMainContext();
  const fetchAllCards = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/courses/course/',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          Module: activeModule,
          Bank: category.Bank,
          Investment: category.Investment,
          Money: category.Money,
          Credit: category.Credit,
          Currency: category.Currency,
          Stock: category.Stock,
        },
      });
      setData(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchAllCards();
  }, [category, activeModule]);

  if (data === null) {
    <div style={{ textAlign: 'center' }}>Loading...</div>;
  } else {
    return (
      <div
        style={{
          display: 'flex ',
          padding: '0',
          flexWrap: 'wrap',
          maxWidth: '1759px',
          width: 'auto',
          justifyContent: 'center',
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
            className="li_card_item">
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
                  onClick={() => router.push('/CoursePage')}
                  className={inter.className}>
                  Join
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
};

export default CardItem;
