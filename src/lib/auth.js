'use client';
import { redirect, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const setTokenJWT = (data) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('jwt', data.jwt);
};
export const setTokenUser = (data) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', data.id);
  Cookies.set('username', data.name);
  Cookies.set('email', data.email);
  Cookies.set('balance', data.balance);
};

export const UnSetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('jwt');
  Cookies.remove('username');
  Cookies.remove('balance');
  Cookies.remove('email');
  console.log('unset');
};

export const getUserFromLocalCookie = () => {
  const username = Cookies.get('username');
  const id = Cookies.get('id');
  const balance = Cookies.get('balance');
  const email = Cookies.get('email');
  return { username, id, balance, email };
};

// export const getIdFromLocalCookie = () => {
//   return Cookies.get('id');
// };

export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};
