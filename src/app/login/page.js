'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import google from '../../../public/assets/google.svg';
import hideIcon from '../../../public/assets/hideIcon.svg';
import { Poppins } from 'next/font/google';
import logo from '../../../public/assets/logo.svg';
import './login.css';
import Link from 'next/link';
import axios from 'axios';
import eye from '../../../public/assets/eye.svg';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setUserPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    // e.prevenDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/user/auth/login/',
        { email: mailValue, password: userPassword },
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data) {
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

  return (
    <div
      style={{
        maxWidth: '1500px',
        width: '100%',
        padding: '20px 190px 20px 50px',
        height: '100%',
        margin: '0 auto',
      }}>
      <div>
        <div>
          <Image src={logo} alt="Login Logo" onClick={() => router.push('/')} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              border: '1px solid #D9D9D9',
              width: '600px',
              height: '850px',
              borderRadius: '50px',
            }}
            className="login_card">
            <div style={{ padding: '130px 50px' }}>
              <div style={{ textAlign: 'center', fontSize: '24px' }}>
                Welcome back to <br /> Junior Finance Academy!
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                  <button
                    style={{
                      padding: '10px',
                      width: '500px',
                      marginTop: '40px',
                      display: 'flex',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      border: '1px solid #CBCAD7',
                      backgroundColor: '#fff',
                    }}>
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
              <div style={{ margin: '30px 0' }}>
                <div>Email Address</div>
                <form onSubmit={handleSubmit}>
                  <input
                    // value={setMailValue}
                    style={{
                      border: '1px solid #CBCAD7',
                      width: '468px',
                      borderRadius: '10px',
                      padding: '15px',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                    placeholder="Enter your email address"
                    onChange={(e) => setMailValue(e.target.value)}
                  />
                </form>
              </div>
              <div style={{ margin: '30px 0' }}>
                <div>Password</div>
                <div
                  style={{
                    border: '1px solid #CBCAD7',
                    width: '496px',
                    borderRadius: '10px',
                    padding: '1px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                  <div style={{ margin: 'auto 0', width: '100%' }}>
                    <form>
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
                    </form>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
