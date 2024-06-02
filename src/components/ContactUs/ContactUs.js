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
          {/* <Image src={logo} alt="Logo Icon" /> */}
          <div
            style={{
              textTransform: 'uppercase',
              color: '#fff',
              textAlign: 'center',
              fontSize: '22px',
            }}>
            Our Slogan
          </div>
          <div className={styles.ContactUsDescription}>
            “Spend Smart, Save Smarter: Fun with Finance!”
          </div>
        </div>
        <div className={styles.middleLineHorizontal}></div>
        <div className={styles.middleLineVertical}></div>
        <div className={styles.rightBlock}>
          <div className={styles.ContactUsTitle}>Contact Us</div>
          <div className={styles.wrapper}>
            <div>
              <div className={styles.emailWrapper}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Image src={mail} style={{ marginRight: '10px' }} alt="Mail Icon" />
                  <div style={{ color: '#fff', fontWeight: '200' }}>finlit@gmail.com</div>
                </div>
              </div>
              <div className={styles.phoneNumber}>
                <Image
                  src={phone}
                  style={{ margin: 'auto 0', marginRight: '10px' }}
                  alt="Phone Icon"
                />
                <div style={{ color: '#fff' }}>+7(707)-518-91-47</div>
              </div>
            </div>
            {/* <div className={styles.images}>
              <Image src={facebook} alt="Facebook Icon" />
              <Image src={instagram} alt="Instagram Icon" />
              <Image src={twitter} alt="Twitter Icon" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
