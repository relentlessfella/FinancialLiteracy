'use client';
import React, { useEffect, useState } from 'react';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import Image from 'next/image';
import logo from '@assets/FinLit.svg';
import dropdown from '@assets/dropdown.svg';
import dropup from '@assets/dropdownreverse.svg';
import styles from './component.module.css';
import { redirect, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { poppins } from '@/fonts';
import coin from '@assets/coinSign.svg';
import axios from 'axios';
import Hamburger from '@/components/Hamburger/Burger/Hamburger';
import { useFetchUser, useUser } from '@/contexts/authContext/authContext';
import { getTokenFromLocalCookie, getUserFromLocalCookie, UnSetToken } from '@/lib/auth';
import logoutIcon from '@assets/MenuIcons/logoutIcon.svg';
import profileIcon from '@assets/MenuIcons/profileIcon.svg';
import bookmarkIcon from '@assets/bookmark.png';
import * as Menubar from '@radix-ui/react-menubar';

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
            alt="logo"
          />
        </div>

        <ul className={styles.ul}>
          <li style={{ display: 'flex' }} className={styles.header_li}>
            <Image src={coin} width={30} height={30} alt="Balance coin icon" draggable={false} />
            {data ? (
              <div
                style={{ margin: '0 10px', fontWeight: '700', color: '#F0BE33', fontSize: '20px' }}>
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
