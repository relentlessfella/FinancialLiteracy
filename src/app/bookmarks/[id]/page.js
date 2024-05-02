'use client';
import React, { useEffect, useState } from 'react';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import styles from '../page.module.css';
// import { alfaSlabOne } from '../../main/page';
import { alfaSlabOne } from '@/fonts';
import { poppins } from '@/app/login/page';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Bookmarks = ({ params }) => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const fetchBookmarks = async () => {
    const response = await axios({
      method: 'get',
      url: `http://localhost:8000/courses/course/get_bookmark/?user_id=${params.id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setData(response.data);
    console.log('response', response.data);
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  if (data === null) {
    return <div>Loading</div>;
  } else {
    return (
      <ProfileLayout>
        <div className={poppins.variable}>
          <div
            style={{ textAlign: 'center', color: '#FE8863', fontSize: '32px' }}
            className={alfaSlabOne.className}>
            My Bookmarks
          </div>
          <ul>
            {data.map((item) => (
              <li key={item.id} style={{ padding: '50px', listStyleType: 'none' }}>
                <div className={styles.bookmarksLessonCard}>
                  <div
                    style={{
                      fontSize: '28px',
                      color: '#FE602F',
                      fontWeight: '1000',
                      margin: '20px 0',
                    }}>
                    Course name:
                    <br /> {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: '18px',
                      color: '#1F1C14',
                      opacity: '0.7',
                      padding: '20px 0',
                    }}>
                    {item.description}
                  </div>
                  <div>
                    <button
                      style={{
                        color: '#fff',
                        backgroundColor: '#A2BF00',
                        border: 'none',
                        width: '130px',
                        height: '40px',
                        borderRadius: '15px',
                        float: 'right',
                        // marginTop: '10px',
                      }}
                      onClick={() => router.push(`/course/${data[0].id}`)}>
                      Continue
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ProfileLayout>
    );
  }
};

export default Bookmarks;
