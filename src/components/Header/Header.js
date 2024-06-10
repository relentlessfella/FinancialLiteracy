'use client';
import React, { useEffect, useState } from 'react';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import Image from 'next/image';
import logo from '@assets/FinLit.svg';
import magnifier from '@assets/magnifier.svg';
import dropdown from '@assets/dropdown.svg';
import dropup from '@assets/dropdownreverse.svg';
import web from '@assets/web.svg';
import styles from './component.module.css';
import { redirect, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { poppins } from '@/fonts';
import coin from '@assets/coinSign.svg';
import axios from 'axios';
import Hamburger from '../Hamburger/Burger/Hamburger';
import { useFetchUser, useUser } from '@/contexts/authContext/authContext';
import { getTokenFromLocalCookie, getUserFromLocalCookie, UnSetToken } from '@/lib/auth';
import logoutIcon from '@assets/MenuIcons/logoutIcon.svg';
import profileIcon from '@assets/MenuIcons/profileIcon.svg';
import bookmarkIcon from '@assets/bookmark.png';
import * as Menubar from '@radix-ui/react-menubar';
import divider from '@assets/Divider.svg';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState(null);
  const [toggleBurger, setToggleBurger] = useState(false);
  const { user, loading } = useFetchUser();
  const { username, balance } = getUserFromLocalCookie();
  const [showVector, setShowVector] = useState(false);
  const fetchUser = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:8000/user/active_user/',
        withCredentials: true,
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    UnSetToken();
    router.push('/login');
    console.log('works');
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      className={`${styles.header} ${poppins.variable}`}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerInner1}>
          <Image
            src={logo}
            draggable={false}
            style={{ marginRight: '50px', marginBottom: '10px' }}
            onClick={() => router.push('/')}
            width={177}
            height={68}
            alt="logo"
          />
        </div>
        <ul className={styles.ul}>
          <li className={styles.header_li}>
            <Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
              <div>Courses</div>
              {pathname === '/' && <div className={styles.divider}></div>}
            </Link>
          </li>
          <li className={styles.header_li}>
            <Link href={'/financial-simulator'} style={{ textDecoration: 'none', color: 'black' }}>
              <div>Financial Simulator</div>
              {pathname === '/financial-simulator' && <div className={styles.divider}></div>}
            </Link>
          </li>
          <li className={styles.header_li} style={{ marginRight: '0' }}>
            <Link href={'/game-instructions'} style={{ textDecoration: 'none', color: 'black' }}>
              <div style={{ width: 'auto' }}>Games</div>
              {pathname === '/game-instructions' && <div className={styles.divider}></div>}
            </Link>
          </li>
        </ul>

        <ul className={styles.ul}>
          <li style={{ display: 'flex' }} className={styles.header_li}>
            <div style={{ display: 'block' }}>
              <Menubar.Root
                className={styles.MenubarRoot}
                onClick={() => setShowVector(!showVector)}>
                <Menubar.Menu>
                  <Menubar.Trigger className={styles.MenubarTrigger}>
                    {user ? <div style={{ fontSize: '18px' }}>{username}</div> : ''}
                  </Menubar.Trigger>
                  <Menubar.Portal>
                    <Menubar.Content
                      className={styles.MenubarContent}
                      align="center"
                      sideOffset={5}>
                      <Menubar.Item
                        className={styles.MenubarItem}
                        onClick={() => router.push('/profile/profile-courses')}>
                        <Image src={profileIcon} alt="My Courses" width={14} height={14} />
                        <button className={styles.links}>My Courses</button>
                      </Menubar.Item>
                      <Menubar.Item
                        className={styles.MenubarItem}
                        onClick={() => router.push('/bookmarks')}>
                        <Image src={bookmarkIcon} alt="bookmark" width={14} height={14} />
                        <button className={styles.links}>My Bookmarks</button>
                      </Menubar.Item>
                      <Menubar.Separator className={styles.MenubarSeparator} />
                      <Menubar.Item className={styles.MenubarItem} onClick={handleLogout}>
                        <Image src={logoutIcon} alt="log out" width={14} height={14} />
                        <button className={styles.links}>Sign out</button>
                      </Menubar.Item>
                    </Menubar.Content>
                  </Menubar.Portal>
                </Menubar.Menu>
              </Menubar.Root>
            </div>
            <div style={{ margin: 'auto 10px' }}>
              {showVector ? (
                <Image src={dropup} width={10} height={10} alt="dropup" />
              ) : (
                <Image src={dropdown} width={10} height={10} alt="dropdown" />
              )}
            </div>
            <Image
              style={{ marginLeft: '20px' }}
              src={coin}
              width={30}
              height={30}
              alt="Balance coin icon"
              draggable={false}
            />
            {data ? (
              <div style={{ margin: '0 10px', fontWeight: '700', color: '#F0BE33' }}>
                {data.balance}
              </div>
            ) : (
              ''
            )}
          </li>
        </ul>

        <div className={styles.hamburger} onClick={() => setToggleBurger(!toggleBurger)}>
          <Hamburger isOpen={toggleBurger} />
        </div>
      </div>
    </nav>
  );
  // }
};
export default Header;
