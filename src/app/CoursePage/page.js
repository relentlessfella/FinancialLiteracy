'use client';
import Image from 'next/image';
import React from 'react';
import courseImage from '../../../public/assets/CourseImage.png';
import { alfaSlabOne } from '../main/page';
import playCourse from '../../../public/assets/PlayCourse.svg';
import bookmark from '../../../public/assets/bookmarkCourse.svg';
import LessonCard from '@/components/CoursePageCard/LessonCard';

const CoursePage = () => {
  return (
    <div className={alfaSlabOne.variable}>
      <Image style={{ width: '100vw', height: '100vh' }} src={courseImage} />
      <div
        style={{
          backgroundColor: '#A2BF00',
          width: '100%',
          height: '250px',
          padding: '50px 80px',
          color: '#fff',
          fontSize: '30px',
        }}
        className={alfaSlabOne.className}>
        <div>Level 1</div>
        <div>Basic Understanding of Financial Literacy</div>
        <div style={{ marginTop: '50px', display: 'flex' }}>
          <button
            style={{
              width: '200px',
              height: '50px',
              display: 'flex',
              borderRadius: '15px',
              border: 'none',
              fontWeight: '600',
              justifyContent: 'center',
              fontSize: '18px',
              color: '#FE602F',
            }}>
            <Image src={playCourse} width={20} height={20} style={{ margin: 'auto 0' }} />
            <div style={{ margin: 'auto 0' }}>Start Lesson</div>
          </button>
          <button
            style={{
              width: '200px',
              height: '50px',
              display: ' flex',
              borderRadius: '15px',
              justifyContent: 'center',
              border: '#FFFFFF 2px solid',
              backgroundColor: '#A2BF00',
              margin: '0 50px',
              fontWeight: '600',
              fontSize: '18px',
              color: '#fff',
            }}>
            <Image src={bookmark} width={20} height={20} style={{ margin: 'auto 0' }} />
            <div style={{ margin: 'auto 0' }}>Bookmark</div>
          </button>
        </div>
      </div>
      <LessonCard />
      <LessonCard />
      <LessonCard />
      <LessonCard />
      <LessonCard />
    </div>
  );
};

export default CoursePage;
