'use client';
import React from 'react';
import style from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '@assets/avatar.svg';
import './page.module.css';
import homeIcon from '@assets/profileIcons/homeIcon.svg';
import settingsIcon from '@assets/profileIcons/settingsIcon.svg';
import bookIcon from '@assets/profileIcons/bookIcon.svg';
// import bookMarkIcon from '@assets/profileIcons/bookMarkIcon.svg';
import bookMarkIcon from '@assets/profileIcons/bookmark.svg';
import exitIcon from '@assets/profileIcons/exitIcon.svg';
import bookIconActive from '@assets/profileIcons/bookIconActive.svg';
import bookMarkActive from '@assets/profileIcons/bookmarkActive.svg';
import logoutActive from '@assets/profileIcons/logoutActive.svg';
import settingsActive from '@assets/profileIcons/settingsActive.svg';
import leaderboardIcon from '@assets/profileIcons/leaderboardIcon.svg';
import leaderboardIconActive from '@assets/profileIcons/leaderboardIconActive.svg';
import { useParams, usePathname } from 'next/navigation';
import Header from '../Header/Header';
import { useRouter } from 'next/navigation';
import { getUserFromLocalCookie } from '@/lib/auth';
import { useFetchUser } from '@/contexts/authContext/authContext';

const ProfileLayout = ({ children }) => {
  const { user, loading } = useFetchUser();
  const { username } = getUserFromLocalCookie();
  const router = useRouter();
  const asideMenuLinks = [
    { id: 1, title: 'Home', link: '/', active: homeIcon, default: homeIcon },
    {
      id: 2,
      title: 'My Courses',
      link: '/profile/profile-courses',
      default: bookIcon,
      active: bookIconActive,
    },
    {
      id: 3,
      title: 'My Bookmarks',
      link: '/bookmarks',
      default: bookMarkIcon,
      active: bookMarkActive,
    },
    {
      id: 4,
      title: 'Leaderboard',
      link: '/leaderboard',
      default: leaderboardIcon,
      active: leaderboardIconActive,
    },
    {
      id: 5,
      title: 'Settings',
      link: '/profile/profile-settings',
      default: settingsIcon,
      active: settingsActive,
    },
    { id: 6, title: 'Log Out', link: '/logout', default: exitIcon, active: logoutActive },
  ];
  const pathname = usePathname();
  if (!user && !loading) {
    router.push('/login');
    return null;
  }
  return (
    <div className={style.container}>
      <aside className={style.profileAside}>
        <div className={style.profileIconsContainer}>
          <Image
            className={style.iconAvatar}
            src={avatar}
            width={100}
            height={100}
            alt="Your profile avatar"
          />
        </div>
        <Link
          className={pathname === '/profile' ? style.profileLinkActive : style.profileLink}
          href="/profile">
          {user ? username : ''}
        </Link>
        <nav className={style.nav}>
          {asideMenuLinks.map((item) => {
            const isActive = pathname === item.link;
            return (
              <div>
                <div key={item.id} className={isActive ? style.navLinkWrapper : ''}>
                  <Link className={isActive ? style.navLinkActive : style.navLink} href={item.link}>
                    <Image
                      className={style.navLinkIcon}
                      src={isActive ? item.active : item.default}
                      alt="Icon"
                    />
                    <div>{item.title}</div>
                  </Link>
                </div>
                <div>{item.title === 'Leaderboard' && <div className={style.divider}></div>}</div>
              </div>
            );
          })}
        </nav>
      </aside>
      <main className={style.main}>
        <div className={style.layoutHeader}>
          <Header />
        </div>
        {children}
      </main>
    </div>
  );
};

export default ProfileLayout;
