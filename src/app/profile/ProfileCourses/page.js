import React from 'react';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import Image from 'next/image';
import webIcon from '../../../../public/assets/web.svg';
import profileImage from '../../../../public/assets/profileImage.png';
import notificationIcon from '../../../../public/assets/profileIcons/notificationIcon.svg';
import styles from './component.module.css';
const ProfileCourses = () => {
  return (
    <ProfileLayout>
      <div>
        <div style={{ padding: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <input
                style={{
                  width: '900px',
                  height: '60px',
                  borderRadius: '10px',
                  border: '1px solid #E5E5E5',
                  padding: '0 20px',
                }}
                type="text"
                placeholder="Search or type"
              />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ margin: 'auto 30px', height: '35px' }}>
                <Image src={webIcon} />
              </div>
              <div style={{ margin: 'auto 0', height: '35px' }}>
                <Image src={notificationIcon} />
              </div>
            </div>
          </div>

          <div style={{ fontWeight: '1000', color: '#86D521', fontSize: '32px', padding: '50px' }}>
            <div style={{ color: '#08A5D3' }}>Hi, Arnibek!</div>
            Take a step towards a better future!
            <div style={{ paddingTop: '50px' }}>
              <Image src={profileImage} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
              <div className={styles.courseSelector}>
                <div style={{ margin: 'auto 30px' }}>
                  <button
                    style={{
                      border: 'none',
                      backgroundColor: '#A2BF00',
                      height: '50px',
                      width: '200px',
                      borderRadius: '30px',
                      fontWeight: '900',
                      color: '#fff',
                      fontSize: '17px',
                    }}>
                    Current Courses
                  </button>
                </div>
                <div style={{ margin: 'auto 30px' }}>
                  <button
                    style={{
                      border: 'none',
                      backgroundColor: '#fff',
                      color: '#A2BF00',
                      height: '50px',
                      width: '200px',
                      borderRadius: '30px',
                      fontWeight: '900',
                      fontSize: '17px',
                    }}>
                    Completed Courses
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '50px' }}>
            <div className={styles.profileLessonCard}>
              <div
                style={{
                  fontSize: '28px',
                  color: '#FE602F',
                  fontWeight: '1000',
                  margin: '20px 0',
                }}>
                Course name:
                <br /> Basic Understanding of Financial Literacy
              </div>
              <div
                style={{ fontSize: '18px', color: '#1F1C14', opacity: '0.7', padding: '20px 0' }}>
                Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum
                dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit
                amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet
                consectetur. Elementum nisl duis tortor sed.
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
                    marginTop: '60px',
                  }}>
                  Continue
                </button>
              </div>
            </div>
          </div>

          <div style={{ padding: '50px' }}>
            <div className={styles.profileLessonCard}>
              <div
                style={{
                  fontSize: '28px',
                  color: '#FE602F',
                  fontWeight: '1000',
                  margin: '20px 0',
                }}>
                Course name:
                <br /> Basic Understanding of Financial Literacy
              </div>
              <div
                style={{ fontSize: '18px', color: '#1F1C14', opacity: '0.7', padding: '20px 0' }}>
                Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum
                dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit
                amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet
                consectetur. Elementum nisl duis tortor sed.
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
                    marginTop: '60px',
                  }}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};
export default ProfileCourses;
