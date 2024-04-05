'use client';
import React from 'react';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import Image from 'next/image';
import webIcon from '../../../public/assets/web.svg';
import notificationsIcon from '../../../public/assets/profileIcons/notificationIcon.svg';
import avatar from '../../../public/assets/avatar.svg';
import { alfaSlabOne } from '../main/page';
import style from './page.module.css';
import ImageRating from '@/components/ImageRating/ImageRating';
import ProfileForm from '../../components/ProfilePageComponents/FormComponent/ProfileForm';
import ProfileAchievements from '@/components/ProfilePageComponents/AchievementsComponent/ProfileAchievements';
import ProfileProgress from '@/components/ProfilePageComponents/ProgressComponent/ProfileProgress';

const Profile = () => {
  return (
    <ProfileLayout>
      <div style={{ padding: '40px 100px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div
            className={alfaSlabOne.variable}
            style={{
              margin: '20px 0px',
            }}>
            <div>
              <div className={style.profileTitle}>My Profile</div>
              <Image src={avatar} style={{ margin: '30px 0' }} />
              <div style={{ color: '#FE602F', fontSize: '24px', fontWeight: '600' }}>Rank 1</div>
              <div style={{ color: '#A2BF00', fontSize: '24px', fontWeight: '600' }}>
                Junior Saver
              </div>
              <ImageRating rating={5} />
            </div>
            <ProfileForm />
            <ProfileAchievements />
            <ProfileProgress />
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
