'use client';
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter, redirect } from 'next/navigation';
import loginImg from '../../../public/assets/login/loginPageImg.png';
import axios from 'axios';
import styles from './component.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/fonts';
import { setTokenUser, setTokenJWT } from '@/lib/auth';

const Login = () => {
  const [mailValue, setMailValue] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [redirectState, setRedirectState] = useState(false);
  const [activeUserData, setActiveUserData] = useState(null);
  const onFinish = (values) => {
    handleSubmit({ values });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmit = async ({ values }) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:8000/user/login/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: values.email,
          password: values.password,
        },
      });
      if (response.data.jwt) {
        fetchActiveUser();
        setTokenJWT(response.data);
        setRedirectState(true);
        console.log('fewfdsgrev', response);
      } else if (response.data.message === 'No such user') {
        alert('Invalid credentials');
      } else {
        alert('Error');
      }
    } catch (error) {
      throw error;
    }
  };
  const fetchActiveUser = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user/active_user/', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (response.data) {
        console.log(response.data);
        setTokenUser(response.data);
        return response.data;
      } else {
        throw new Error('No data returned');
      }
    } catch (error) {
      console.error('Error fetching active user:', error);
      throw error;
    }
  };

  if (redirectState) {
    return redirect('/');
  }
  return (
    <div className={`${styles.main} ${poppins.variable}`}>
      <div className={styles.formWrapper}>
        <Form
          className={styles.form}
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          layout={null}
          initialValues={{
            remember: true,
            layout: null,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <div className={styles.welcomeText}>
            Welcome back to
            <br /> Junior Finance Academy!
          </div>
          <Form.Item
            label="Email"
            name="email"
            style={{ width: '100%' }}
            rules={[
              {
                required: true,
                message: 'Please input your email address!',
              },
            ]}>
            <Input className={styles.emailInput} placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            // className={styles.password}
            style={{ width: '100%' }}
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}>
            <Input.Password className={styles.inputPassword} placeholder="password" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 200,
            }}>
            <Button type="primary" htmlType="submit" className={styles.submit}>
              Login
            </Button>
          </Form.Item>
          <div className={styles.formText}>
            Don&apos;t have an account?{' '}
            <Link
              href={'/registration'}
              style={{ color: '#A2BF00', borderBottom: '1px solid  #A2BF00' }}>
              Sign Up
            </Link>
          </div>
        </Form>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={loginImg} layout="responsive" />
      </div>
    </div>
  );
};

export default Login;
