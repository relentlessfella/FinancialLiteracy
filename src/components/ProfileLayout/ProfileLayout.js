import React from 'react';
import style from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '../../../public/assets/avatar.svg';
import logo from '../../../public/assets/logo.svg';
import './page.module.css';
import homeIcon from '../../../public/assets/profileIcons/homeIcon.png';
import settingsIcon from '../../../public/assets/profileIcons/settingsIcon.svg';
import bookIcon from '../../../public/assets/profileIcons/bookIcon.svg';
import bookMarkIcon from '../../../public/assets/profileIcons/bookMarkIcon.svg';
import exitIcon from '../../../public/assets/profileIcons/exitIcon.svg';
import notificationIcon from '../../../public/assets/profileIcons/notificationIcon.svg';

const ProfileLayout = ({ children }) => {
  return (
    <div className={style.container}>
      <aside className={style.profileAside}>
        <div className={style.profileIconsContainer}>
          <Image className={style.iconLogo} src={logo} width={58} height={48} />
          <Image className={style.iconAvatar} src={avatar} width={100} height={100} />
        </div>
        <Link
          style={{
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            color: '#FE602F',
            padding: '10px 5px',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          href="/profile">
          Nussupekov Arnibek
        </Link>
        <nav className={style.nav}>
          <Link className={style.navLink} href="/">
            <Image className={style.navLinkIcon} src={homeIcon} />
            <div>Home</div>
          </Link>
          <Link className={style.navLink} href="/profile/ProfileCourses">
            <Image className={style.navLinkIcon} src={bookIcon} />
            My Courses
          </Link>
          <Link className={style.navLink} href="/bookmarks">
            <Image className={style.navLinkIcon} src={bookMarkIcon} />
            My Bookmarks
          </Link>
          <Link className={style.navLink} href="/settings">
            <Image className={style.navLinkIcon} src={settingsIcon} />
            Settings
          </Link>
          <Link className={style.navLink} href="/logout">
            <Image className={style.navLinkIcon} src={exitIcon} />
            Log Out
          </Link>
        </nav>
      </aside>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default ProfileLayout;
