'use client';
import React, { useEffect, useState } from 'react';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import styles from './page.module.css';
import { alfaSlabOne } from '@/fonts';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { CourseCard } from '@/components/CourseCard/CourseCard';
import Loader from '@/components/Loader/Loader2';

const Bookmarks = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const fetchBookmarks = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://86.107.44.136:8000/courses/course/get_bookmark/?user_id=1',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  if (data === null) {
    return (
      <ProfileLayout>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      </ProfileLayout>
    );
  } else {
    return (
      <ProfileLayout>
        <div>
          <div
            style={{ textAlign: 'center', color: '#FE8863', fontSize: '32px' }}
            className={alfaSlabOne.className}>
            {console.log(data)}
            My Bookmarks
          </div>
          <ul>
            <CourseCard data={data} />
            {/* <Loader /> */}
          </ul>
        </div>
      </ProfileLayout>
    );
  }
};

export default Bookmarks;
