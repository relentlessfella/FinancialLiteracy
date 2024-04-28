import React from 'react';
import styles from './component.module.css';
import hat from '../../../../public/assets/SideNavImg/hat.svg';
import square from '../../../../public/assets/SideNavImg/square.svg';
import joystick from '../../../../public/assets/SideNavImg/joystick.svg';
import Link from 'next/link';
import Image from 'next/image';

const SideNavigation = ({ isOpen }) => {
  const SideLinks = [
    { id: 1, title: 'Courses', image: hat, href: '/' },
    { id: 2, title: 'Financial Simulator', image: square, href: '/financial-simulator' },
    { id: 3, title: 'Games', image: joystick, href: '/game' },
  ];
  console.log(SideLinks);
  return (
    <div className={isOpen ? `${styles.sideNav} ${styles.open}` : styles.sideNav}>
      {SideLinks.map((item) => (
        <Link key={item.id} href={item.href} className={styles.links}>
          <Image className={styles.icons} src={item.image} width={20} height={20} />
          <div>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default SideNavigation;
