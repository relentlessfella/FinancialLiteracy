'use client';
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
import bookIconActive from '../../../public/assets/profileIcons/bookIconActive.svg';
import bookMarkActive from '../../../public/assets/profileIcons/bookMarkActive.svg';
import logoutActive from '../../../public/assets/profileIcons/logoutActive.svg';
import settingsActive from '../../../public/assets/profileIcons/settingsActive.svg';
import { useParams, usePathname } from 'next/navigation';

const ProfileLayout = ({ children }) => {
  const asideMenuLinks = [
    { title: 'Home', link: '/', active: homeIcon, default: homeIcon },
    {
      title: 'My Courses',
      link: '/profile/profile-courses',
      default: bookIcon,
      active: bookIconActive,
    },
    { title: 'My Bookmarks', link: '/bookmarks', default: bookMarkIcon, active: bookMarkActive },
    {
      title: 'Settings',
      link: '/profile/profile-settings',
      default: settingsIcon,
      active: settingsActive,
    },
    { title: 'Log Out', link: '/logout', default: exitIcon, active: logoutActive },
  ];
  const pathname = usePathname();
  return (
    <div className={style.container}>
      <aside className={style.profileAside}>
        <div className={style.profileIconsContainer}>
          <Image className={style.iconLogo} src={logo} width={58} height={48} />
          <Image className={style.iconAvatar} src={avatar} width={100} height={100} />
        </div>
        <Link
          className={pathname === '/profile' ? style.profileLinkActive : style.profileLink}
          href="/profile">
          Nussupekov Arnibek
        </Link>
        <nav className={style.nav}>
          {asideMenuLinks.map((item) => {
            const isActive = pathname === item.link;
            return (
              <div className={isActive ? style.navLinkWrapper : ''}>
                <Link className={isActive ? style.navLinkActive : style.navLink} href={item.link}>
                  <Image
                    className={style.navLinkIcon}
                    src={isActive ? item.active : item.default}
                  />
                  <div>{item.title}</div>
                </Link>
              </div>
            );
          })}
        </nav>
      </aside>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default ProfileLayout;
