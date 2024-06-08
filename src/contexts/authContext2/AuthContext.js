'use client';
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('authTokens')) : null,
  );
  const [user, setUser] = useState(() => (authTokens ? jwtDecode(authTokens.jwt) : null));
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const loginUser = async (email, password) => {
    const response = await axios.post('http://localhost:8000/user/login/', { email, password });
    console.log(response);
    if (response.status === 200) {
      setAuthTokens(response.data);
      setUser(jwtDecode(response.data.jwt));
      localStorage.setItem('authTokens', JSON.stringify(response.data));
      router.push('/');
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    router.push('/login');
  };

  useEffect(() => {
    if (loading) {
      // Perform initial authentication check
      setLoading(false);
    }

    const interval = setInterval(() => {
      if (authTokens && jwtDecode(authTokens.access).exp * 1000 < Date.now()) {
        logoutUser();
      }
    }, 1000 * 60); // Check every minute

    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
