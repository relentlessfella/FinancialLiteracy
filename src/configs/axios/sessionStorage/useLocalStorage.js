'use client';
import { useEffect, useState } from 'react';

const useLocalStorage = (key) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem(key);
      const parseUser = Number(storedData);
      setData(parseUser);
    }
  }, []);

  return data;
};

export default useLocalStorage;
