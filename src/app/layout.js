'use client';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';
import React from 'react';
import ContactUs from '@/components/ContactUs/ContactUs';
import { MainContextProvider } from '../contexts/ContextProvider/ContextProvider';
import { usePathname, useParams } from 'next/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '400', '900', '800', '700'] });
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };
export const ContextProvider = React.createContext();
export default function RootLayout({ children }) {
  const params = useParams();
  const pathname = usePathname();
  // console.log(params.id);
  return (
    <MainContextProvider>
      <html lang="en">
        <body
          className={poppins.className}
          style={{
            margin: '0',
            backgroundColor: pathname === '/orientation-page' ? '#A2BF00' : 'initial',
          }}>
          {pathname != '/login' &&
          pathname != '/registration' &&
          pathname != '/profile' &&
          pathname != '/profile/profile-courses' &&
          pathname != '/profile/profile-settings' &&
          pathname != `/bookmarks` &&
          pathname != `/financial-simulator` &&
          pathname != `/orientation-page` &&
          pathname != `/financial-simulator/${params.id}/${params.slug}` &&
          pathname != `/bookmarks/${params.id}` ? (
            <Header />
          ) : (
            <></>
          )}
          <div style={{ minHeight: '100vh' }}>{children}</div>
          {pathname != '/login' &&
          pathname != '/registration' &&
          pathname != '/profile' &&
          pathname != '/profile/profile-courses' &&
          pathname != '/profile/profile-settings' &&
          pathname != `/bookmarks` &&
          pathname != `/financial-simulator` &&
          pathname != `/orientation-page` &&
          pathname != `/financial-simulator/${params.id}` &&
          pathname != `/financial-simulator/${params.id}/${params.slug}` &&
          pathname != `/bookmarks/${params.id}` ? (
            <ContactUs />
          ) : (
            <></>
          )}
        </body>
      </html>
    </MainContextProvider>
  );
}
