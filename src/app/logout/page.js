'use client';
import { UnSetToken } from '@/lib/auth';
import React from 'react';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();
  UnSetToken();
  router.push('/login');
};

export default Logout;
