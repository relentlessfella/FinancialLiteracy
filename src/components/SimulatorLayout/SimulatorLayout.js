'use client';
import React from 'react';
import styles from './page.module.css';
import { poppins } from '@/app/login/page';
import { alfaSlabOne } from '@/app/main/page';
import Link from 'next/link';
import Image from 'next/image';
import dropdown from '../../../public/assets/dropdown.svg';
import { useParams } from 'next/navigation';
const SimulatorLayout = ({ children }) => {
  const params = useParams();
  return (
    <div className={alfaSlabOne.variable}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          // paddingLeft: '40px',
          // paddingRight: '40px',
        }}
        className={`${styles.header} ${poppins.variable}`}>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li className={styles.header_li}>
            <Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
              <div>Courses</div>
            </Link>
          </li>
          <li className={styles.header_li}>
            <Link href={'/financial-simulator'} style={{ textDecoration: 'none', color: 'black' }}>
              <div>Financial Simulator</div>
            </Link>
          </li>
          <li style={{ display: 'flex' }} className={styles.header_li}>
            <div>
              <Link href={'/profile'} style={{ textDecoration: 'none', color: 'black' }}>
                <div>Nussupekov Arnibek</div>
              </Link>
            </div>
            <Image
              style={{ paddingTop: '0px' }}
              src={dropdown}
              width={10}
              height={10}
              alt="Dropdown icon"
            />
          </li>
          <li className={styles.header_li}>{/* <Image src={web} width={30} height={30} /> */}</li>
        </ul>
      </nav>
      <div className={styles.section_background}>
        {params.slug === undefined
          ? 'Try Financial Simulation solving different tasks'
          : params.slug.replace('-', ' ')}
      </div>
      <div style={{ minHeight: '800px' }}>{children}</div>
    </div>
  );
};
export default SimulatorLayout;
