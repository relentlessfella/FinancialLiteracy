'use client';
import React, { useEffect, useState } from 'react';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import styles from './page.module.css';
import { alfaSlabOne } from '../main/page';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { CourseCard } from '@/components/CourseCard/CourseCard';
import { Loader } from '@/components/Loader/Loader';

const Bookmarks = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const fetchBookmarks = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/courses/course/get_bookmark/?user_id=1',
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
    return <Loader />;
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
