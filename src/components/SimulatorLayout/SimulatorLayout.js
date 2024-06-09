'use client';
import React from 'react';
import styles from './page.module.css';
import { poppins } from '@/app/login/page';
import { alfaSlabOne } from '@/fonts';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../Header/Header';
import dropdown from '../../../public/assets/dropdown.svg';
import { useParams } from 'next/navigation';
import ContactUs from '../ContactUs/ContactUs';
const SimulatorLayout = ({ children }) => {
  const params = useParams();
  return (
    <div className={alfaSlabOne.variable}>
      <Header />
      <div className={styles.section_background}>
        <div className={styles.backgroundTitle}>
          {params.slug === undefined
            ? 'Try Financial Simulation solving different tasks'
            : params.slug.replace('-', ' ')}
        </div>
      </div>
      <div style={{ minHeight: '800px', marginBottom: '100px' }}>{children}</div>
      <ContactUs />
    </div>
  );
};
export default SimulatorLayout;
