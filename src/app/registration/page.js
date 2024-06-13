'use client';
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useRouter, redirect } from 'next/navigation';
import loginImg from '../../../public/assets/login/loginPageImg.png';
import axios from 'axios';
import styles from './component.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/fonts';

const Registration = () => {
  const [mailValue, setMailValue] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [redirectState, setRedirectState] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
    handleSubmit({ values });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmit = async ({ values }) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:8000/user/register/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: values.email,
          name: values.username,
          password: values.password,
          balance: 0,
        },
        withCredentials: true,
      });
      if (response.data) {
        setRedirectState(true);
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

  const passwordValidator = (rule, value) => {
    if (!value) {
      return Promise.reject('Please input your password!');
    }
    if (value.length < 8) {
      return Promise.reject('Password must be at least 8 characters long!');
    }
    if (!/[A-Z]/.test(value)) {
      return Promise.reject('Password must contain at least one uppercase letter!');
    }
    if (!/[a-z]/.test(value)) {
      return Promise.reject('Password must contain at least one lowercase letter!');
    }
    if (!/[0-9]/.test(value)) {
      return Promise.reject('Password must contain at least one number!');
    }
    return Promise.resolve();
  };

  if (redirectState) {
    redirect('/login');
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
          <div className={styles.welcomeText}>Create an account</div>
          <Form.Item
            label="Email Address"
            name="email"
            style={{ width: '100%' }}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                type: 'email',
              },
            ]}>
            <Input className={styles.emailInput} placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            className={styles.password}
            label="Full Name"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your full name!',
              },
            ]}>
            <Input className={styles.inputPassword} placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            className={styles.password}
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                validator: passwordValidator,
              },
            ]}>
            <Input.Password
              className={styles.inputPassword}
              placeholder="Enter a strong password"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 200,
            }}>
            <Button type="primary" htmlType="submit" className={styles.submit}>
              Create an account
            </Button>
          </Form.Item>
          <div className={styles.formText}>
            Already have an account?
            <Link href={'/login'} style={{ color: '#A2BF00', borderBottom: '1px solid  #A2BF00' }}>
              Login
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

export default Registration;
