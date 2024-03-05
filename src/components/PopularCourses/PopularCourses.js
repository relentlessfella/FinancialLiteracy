import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { alfaSlabOne, inter, nunito } from '@/app/main/page';
import cardImage from '../../../public/assets/CardImage.png';
import play from '../../../public/assets/play.svg';
import ImageRating from '../ImageRating/ImageRating';
import { data } from '@/data/data';
import axios from 'axios';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

const PopularCourses = () => {
  const [data, setData] = useState(null);
  const fetchCourses = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/courses/course',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          Module: 1,
          Bank: 'Bank',
          Investment: 'Investment',
          Money: 'Money',
          Credit: 'Credit',
          Currency: null,
          Stock: null,
        },
      });
      console.log('Only bank | response:', response.data);
      setData(response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (data === null || data === undefined) {
    <div style={{ textAlign: 'center' }}>Loading...</div>;
  } else {
    return (
      <div>
        <div
          className={alfaSlabOne.className}
          style={{
            fontSize: '50px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
          }}>
          <div style={{ color: '#A2BF00', marginRight: '15px' }}>Popular</div>
          <div style={{ color: '#FE8863' }}>3 Courses</div>
        </div>
        <div
          style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
          }}
          className={inter.className}>
          <ul
            style={{
              display: 'flex ',
              padding: '0',
              flexWrap: 'wrap',
              maxWidth: '1760px',
              width: 'auto',
            }}
            className="ul_main_page">
            {data.data.slice(0, 3).map((item) => (
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
                  <Image src={cardImage} width={400} alt="Image og Card Item" />
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
                      className={inter.className}>
                      Join
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default PopularCourses;
