'use client';
import React from 'react';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import Image from 'next/image';
import logo from '../../public/assets/FinLit.svg';
import magnifier from '../../public/assets/magnifier.svg';
import dropdown from '../../public/assets/dropdown.svg';
import web from '../../public/assets/web.svg';
import './Header.css';
import Link from 'next/link';
import divider from '../../public/assets/Divider.svg';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const { testData } = useMainContext();
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
      className="header">
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
            width: '444px',
            height: '62px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          {/* <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>Search</div> */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: '20px',
                width: '350px',
                borderRadius: '13px',
                border: 'none',
                outline: 'none',
              }}
            />
            <Image src={magnifier} width={20} height={20} style={{ margin: '15px' }} />
          </div>
        </div>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li className="header_li">
          <Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
            <div>Courses</div>
            {/* <Image src={divider } width={51} height={19} /> */}
          </Link>
        </li>
        <li className="header_li">
          <Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
            <div>Financial Simulator</div>
            {/* <Image src={divider} width={51} height={19} /> */}
          </Link>
        </li>
        <li style={{ display: 'flex' }} className="header_li">
          <div>
            <Link href={'/profile'} style={{ textDecoration: 'none', color: 'black' }}>
              <div>Nussupekov Arnibek</div>
              {/* <Image src={divider} width={51} height={19} /> */}
            </Link>
          </div>
          <Image style={{ paddingTop: '0px' }} src={dropdown} width={10} height={10} />
        </li>
        <li className="header_li">
          <Image src={web} width={30} height={30} />
        </li>
      </ul>
    </nav>
  );
};
export default Header;
