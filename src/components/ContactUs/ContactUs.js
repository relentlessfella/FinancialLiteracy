import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/logo.svg';
import mail from '../../../public/assets/mail.svg';
import facebook from '../../../public/assets/facebook.svg';
import twitter from '../../../public/assets/twitter.svg';
import instagram from '../../../public/assets/instagram.svg';
import phone from '../../../public/assets/phone.svg';
import styles from './component.module.css';

const ContactUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <Image src={logo} alt="Logo Icon" />
          <div style={{ color: '#fff', marginTop: '15px' }}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.”
          </div>
        </div>
        <div className={styles.middleLineHorizontal}></div>
        <div className={styles.middleLineVertical}></div>
        <div className={styles.rightBlock}>
          <div style={{ color: '#fff', fontSize: '20px' }}>Contact Us</div>
          <div className={styles.wrapper}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center' }}>
                  <Image src={mail} style={{ marginRight: '10px' }} alt="Mail Icon" />
                  <div style={{ color: '#fff', fontSize: '13px', fontWeight: '200' }}>
                    email@gmail.com
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center' }}>
                <Image
                  src={phone}
                  style={{ margin: 'auto 0', marginRight: '10px' }}
                  alt="Phone Icon"
                />
                <div style={{ color: '#fff' }}>+77777777</div>
              </div>
            </div>
            <div className={styles.images}>
              <Image src={facebook} alt="Facebook Icon" />
              <Image src={instagram} alt="Instagram Icon" />
              <Image src={twitter} alt="Twitter Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
