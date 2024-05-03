import React from 'react';
import styles from './component.module.css';
import hat from '../../../../public/assets/SideNavImg/hat.svg';
import square from '../../../../public/assets/SideNavImg/square.svg';
import joystick from '../../../../public/assets/SideNavImg/joystick.svg';
import Link from 'next/link';
import Image from 'next/image';

const SideNavigation = ({ isOpen }) => {
  const SideLinks = [
    { id: 1, title: 'Home', image: hat, href: '/' },
    { id: 2, title: 'Games', image: joystick, href: '/profile/profile-courses' },
    { id: 3, title: 'Games', image: joystick, href: '/bookmarks' },
    { id: 4, title: 'Games', image: joystick, href: '/leaderboard' },
    { id: 5, title: 'Games', image: joystick, href: '/profile/profile-settings' },
    { id: 6, title: 'Financial Simulator', image: square, href: '/financial-simulator' },
    { id: 7, title: 'Games', image: joystick, href: '/game' },
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
            alt={item.title + ' icon'}
          />
          <div>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default SideNavigation;
