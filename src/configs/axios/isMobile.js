'use client';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  const [hideOnMobile, setHideOnMobile] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  useEffect(() => {
    setHideOnMobile(isTabletOrMobile);
  }, [isTabletOrMobile]);
  return hideOnMobile;
};
