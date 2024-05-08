'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import google from '../../../public/assets/google.svg';
import hideIcon from '../../../public/assets/hideIcon.svg';
import { Poppins } from 'next/font/google';
import logo from '../../../public/assets/logo.svg';
import Link from 'next/link';
import styles from './component.module.css';
import axios from 'axios';
import eye from '../../../public/assets/eye.svg';
import { useRouter, redirect } from 'next/navigation';
import loginImg from '../../../public/assets/login/loginPageImg.png';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [mailValue, setMailValue] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [redirectState, setRedirectState] = useState(false);
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setUserPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:8000/user/login/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: mailValue,
          password: userPassword,
        },
        withCredentials: true,
      });
      if (response.data) {
        setRedirectState(true);
        // localStorage.setItem('AuthToken', response.data.jwt);
        console.log('Success: ', response.data);
      } else {
        console.log(
          'Error: ',
          response.data.message,
          ' Mail: ',
          mailValue,
          ' Pass: ',
          userPassword,
        );
      }
    } catch (error) {
      throw error;
    }
  };

  if (redirectState) {
    redirect('/');
  }

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>{/* <Image src={logo} alt="Login Logo" onClick={() => router.push('/')} /> */}</div>
        <div className={styles.cardWrapper}>
          <div className={styles.login_card}>
            <div style={{ textAlign: 'center', fontSize: '24px' }}>
              Welcome back to <br /> Junior Finance Academy!
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <button className={styles.googleBtn}>
                  <div
                    style={{ margin: 'auto 10px', fontSize: '14px' }}
                    className={poppins.className}>
                    Continue with Google
                  </div>
                  <Image style={{ margin: 'auto 0' }} src={google} alt="google logo" />
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <div
                style={{
                  borderBottom: '1px solid #CBCAD7',
                  width: '150px',
                  height: '0px',
                  margin: 'auto 0',
                }}></div>
              <div style={{ margin: '0 15px' }}>Or</div>
              <div
                style={{
                  borderBottom: '1px solid #CBCAD7',
                  width: '150px',
                  height: '0px',
                  margin: 'auto 0',
                }}></div>
            </div>
            <div className={styles.emailWrapper}>
              <div>Email Address</div>
              <input
                // value={setMailValue}
                className={styles.mailInput}
                placeholder="Enter your email address"
                onChange={(e) => setMailValue(e.target.value)}
              />
            </div>
            <div className={styles.passwordField}>
              <div>Password</div>
              <div className={styles.passwordInput}>
                <div style={{ margin: 'auto 0', width: '100%' }}>
                  <input
                    // value={setUserPassword}
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: 'none',
                      borderRadius: '10px',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                    // onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <div
                  style={{ margin: 'auto 5px', width: '21px', height: '25px' }}
                  onClick={togglePasswordVisibility}>
                  {passwordVisible ? (
                    <Image src={eye} alt="Visibility Icon" width={21} height={25} />
                  ) : (
                    <Image src={hideIcon} alt="Hide Icon" width={21} height={25} />
                  )}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div>Forgot password?</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
              <button
                style={{
                  width: '480px',
                  padding: '15px',
                  borderRadius: '40px',
                  color: '#fff',
                  backgroundColor: '#FE602F',
                  border: 'none',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
                onClick={handleSubmit}
                className={poppins.className}>
                Login
              </button>
            </div>
            <div style={{ textAlign: 'center' }}>
              Already have an account? <Link href={'/registration'}>Sign Up</Link>
            </div>
          </div>
          <div style={{ margin: 'auto' }}>
            <Image src={loginImg} width={500} height={500} />
          </div>
        </div>
      </form>
    </div>
  );
};

// export default Login;
