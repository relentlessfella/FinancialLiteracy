import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/logo.svg';
import mail from '../../../public/assets/mail.svg';
import facebook from '../../../public/assets/facebook.svg';
import twitter from '../../../public/assets/twitter.svg';
import instagram from '../../../public/assets/instagram.svg';
import phone from '../../../public/assets/phone.svg';

const ContactUs = () => {
  return (
    <div
      style={{
        backgroundColor: '#08A5D3',
        width: '100%',
        height: '400px',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
      }}>
      <div style={{ width: '400px', padding: '40px' }}>
        <Image src={logo} alt="Logo Icon" />
        <div style={{ color: '#fff', marginTop: '15px' }}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.”
        </div>
      </div>
      <div style={{ borderLeft: '1px solid #fff', height: '300px', padding: '40px' }}></div>
      <div style={{ width: '400px' }}>
        <div style={{ color: '#fff', fontSize: '20px' }}>Contact Us</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <div style={{ display: 'flex' }}>
            <Image src={mail} style={{ marginRight: '10px' }} alt="Mail Icon" />
            <div style={{ color: '#fff', fontSize: '13px', fontWeight: '200' }}>
              email@gmail.com
            </div>
          </div>
          <Image src={facebook} style={{ marginLeft: '30px' }} alt="Facebook Icon" />
          <Image src={instagram} alt="Instagram Icon" />
          <Image src={twitter} alt="Twitter Icon" />
        </div>
        <div style={{ display: 'flex' }}>
          <Image src={phone} style={{ margin: 'auto 0', marginRight: '10px' }} alt="Phone Icon" />
          <div style={{ color: '#fff' }}>+77777777</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
