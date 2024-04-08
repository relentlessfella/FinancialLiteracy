'use client';
import React, { useEffect, useState } from 'react';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import Image from 'next/image';
import logo from '../../../public/assets/FinLit.svg';
import magnifier from '../../../public/assets/magnifier.svg';
import dropdown from '../../../public/assets/dropdown.svg';
import web from '../../../public/assets/web.svg';
import styles from './component.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { poppins } from '@/app/login/page';
import coin from '../../../public/assets/coinSign.svg';
import axios from 'axios';

const Header = () => {
  const router = useRouter();
  const { testData } = useMainContext();
  const [data, setData] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/user/profile/1',
      });
      setData(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (data === null) {
    return <div>Loading..</div>;
  } else {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className={`${styles.header} ${poppins.variable}`}>
        <div
          style={{
            maxWidth: '1875px',
            display: 'flex',
            margin: '0 auto',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 15px',
          }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={logo}
              style={{ marginRight: '50px', marginBottom: '10px' }}
              onClick={() => router.push('/')}
            />
            <div
              style={{
                borderRadius: '10px',
                border: '1px solid gray',
                // width: '444px',
                // height: '62px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              {/* <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>Search</div> */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="text" placeholder="Search..." className={styles.input} />
                <Image src={magnifier} width={20} height={20} style={{ margin: '15px' }} />
              </div>
            </div>
          </div>
          <ul style={{ display: 'flex', listStyle: 'none' }}>
            <li className={styles.header_li}>
              <Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                <div>Courses</div>
                {/* <Image src={divider } width={51} height={19} /> */}
              </Link>
            </li>
            <li className={styles.header_li}>
              <Link
                href={'/financial-simulator'}
                style={{ textDecoration: 'none', color: 'black' }}>
                <div>Financial Simulator</div>
                {/* <Image src={divider} width={51} height={19} /> */}
              </Link>
            </li>
            <li style={{ display: 'flex' }} className={styles.header_li}>
              <div>
                <Link href={'/profile'} style={{ textDecoration: 'none', color: 'black' }}>
                  <div>Nussupekov Arnibek</div>
                  {/* <Image src={divider} width={51} height={19} /> */}
                </Link>
              </div>
              <Image style={{ paddingTop: '0px' }} src={dropdown} width={10} height={10} />
            </li>
            <li className={styles.header_li}>
              <Image src={coin} width={30} height={30} />
              <div style={{ margin: '0 10px', fontWeight: '700' }}>{data.balance}</div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};
export default Header;
