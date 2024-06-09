'use client';
import { Poppins } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import Header from '../components/Header/Header';
import React, { useEffect } from 'react';
import ContactUs from '@/components/ContactUs/ContactUs';
import { MainContextProvider } from '../contexts/ContextProvider/ContextProvider';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { poppins } from '@/fonts';
import { UserProvider } from '@/contexts/authContext/authContext';
import { AuthProvider } from '@/contexts/authContext2/AuthContext';
import axios from 'axios';
import { UnSetToken } from '@/lib/auth';
import Head from 'next/head';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };
export const ContextProvider = React.createContext();
export default function RootLayout({ children, user, loading = false }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const fetchUser = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:8000/user/active_user/',
        withCredentials: true,
      });
      if (response.data.message === 'Unauthenticated') {
        UnSetToken();
        router.push('/login');
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    // <AuthProvider>
    <UserProvider value={{ user, loading }}>
      <MainContextProvider>
        <html lang="en">
          <body
            className={poppins.className}
            style={{
              margin: '0',
              backgroundColor:
                pathname === '/orientation-page' ||
                pathname === '/orientation-page/quiz' ||
                pathname === '/orientation-page/recomendation' ||
                pathname === '/game-instructions/game'
                  ? '#A2BF00'
                  : 'initial',
            }}>
            <div className={styles.mainWrapper}>{children}</div>
          </body>
        </html>
      </MainContextProvider>
    </UserProvider>
    // </AuthProvider>
  );
}
