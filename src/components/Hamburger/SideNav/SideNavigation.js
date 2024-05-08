import React from 'react';
import styles from './component.module.css';
import hat from '@assets/SideNavImg/hat.svg';
import square from '@assets/SideNavImg/square.svg';
import joystick from '@assets/SideNavImg/joystick.svg';
import Link from 'next/link';
import Image from 'next/image';
import bookIcon from '@assets/profileIcons/bookIcon.svg';
import bookMarkIcon from '@assets/profileIcons/bookMarkIcon.svg';
import leaderboardIcon from '@assets/profileIcons/leaderboardIcon.svg';
import settingsIcon from '@assets/profileIcons/settingsIcon.svg';
import logoutIcon from '@assets/logoutIcon.png';

const SideNavigation = ({ isOpen }) => {
  const SideLinks = [
    { id: 1, title: 'Home', image: hat, href: '/' },
    { id: 2, title: 'My Courses', image: bookIcon, href: '/profile/profile-courses' },
    { id: 3, title: 'My Bookmarks', image: bookMarkIcon, href: '/bookmarks' },
    { id: 4, title: 'Leaderboard', image: leaderboardIcon, href: '/leaderboard' },
    { id: 5, title: 'Settings', image: settingsIcon, href: '/profile/profile-settings' },
    { id: 6, title: 'Financial Simulator', image: square, href: '/financial-simulator' },
    { id: 7, title: 'Games', image: joystick, href: '/game' },
    { id: 8, title: 'Sign Out', image: logoutIcon, href: '/logout' },
  ];
  console.log(SideLinks);
  return (
    <div className={isOpen ? `${styles.sideNav} ${styles.open}` : styles.sideNav}>
      {SideLinks.map((item) => (
        <Link key={item.id} href={item.href} className={styles.links}>
          <Image
            className={styles.icons}
            src={item.image}
            width={20}
            height={20}
            alt={item.title + 'icon'}
          />
          <div>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default SideNavigation;
