'use client';
import React, { useEffect, useState } from 'react';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import styles from './page.module.css';
import { alfaSlabOne } from '@/fonts';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { CourseCard } from '@/components/CourseCard/CourseCard1';
import Loader from '@/components/Loader/Loader2';
import { getUserFromLocalCookie } from '@/lib/auth';
import emptyBox from '@assets/empty-box.png';
import Image from 'next/image';

const Bookmarks = () => {
  const router = useRouter();
  const { id } = getUserFromLocalCookie();
  const [data, setData] = useState(null);

  const fetchBookmarks = async () => {
    const response = await axios({
      method: 'get',
      url: `http://localhost:8000/courses/course/get_bookmark/?user_id=${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    if (id === undefined) {
      return router.push('/login');
    } else {
      fetchBookmarks();
    }
  }, []);

  if (data === null) {
    return (
      <ProfileLayout>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      </ProfileLayout>
    );
  }
  if (data.length === 0) {
    return (
      <ProfileLayout>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
          <div>
            <Image src={emptyBox} width={300} height={300} />
            <div style={{ textAlign: 'center' }}>You&apos;re bookmarks are empty</div>
          </div>
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
          <ul className={styles.main}>
            <CourseCard data={data} />
          </ul>
        </div>
      </ProfileLayout>
    );
  }
};

export default Bookmarks;
