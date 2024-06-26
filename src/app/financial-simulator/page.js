'use client';
import React, { useEffect, useState } from 'react';
import SimulatorLayout from '@/components/SimulatorLayout/SimulatorLayout';
import CourseModules from '@/components/CourseModules/CourseModules';
import Card from '@/components/SimulatorCard/Card';
import styles from './page.module.css';
import axios from 'axios';
import Loader from '@/components/Loader/Loader2';
import NotFound from '@/components/NotFound/NotFound';
import Image from 'next/image';
import simulator from '@assets/simulatorPage.svg';
import Header from '@/components/Header/Header';
import ContactUs from '@/components/ContactUs/ContactUs';

const FinancialSimulator = () => {
  const [activeOption, setActiveOption] = useState(1);
  const [data, setData] = useState(null);
  const options = [
    { id: 1, title: 'Stock' },
    { id: 2, title: 'Investment' },
    { id: 3, title: 'Money' },
    { id: 4, title: 'Economy' },
  ];

  const mainCourseModule = {
    module_active: {
      padding: '10px 5px',
      fontSize: '12px',
    },
    main: {
      padding: '5px 5px',
    },
  };

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://localhost:8000/simulator/fin_trial/',
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            stocks: activeOption === 1 ? 'stocks' : '',
            investment: activeOption === 2 ? 'investment' : '',
            money: activeOption === 3 ? 'money' : '',
            // credit: activeOption === 4 ? 'credit' : '',
            economy: activeOption === 4 ? 'economy' : '',
          },
        });
        setData(response);
      } catch (error) {
        throw error;
      }
    };
    fetchCard();
  }, [activeOption]);

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Loader />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className={styles.main}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '120px' }}>
            <Image src={simulator} />
          </div>
          <CourseModules
            modules={options}
            width={750}
            activeModule={activeOption}
            setActiveModule={setActiveOption}
            backgroundColor={'rgba(196, 196, 196, 0.15)'}
            mobileWidth={335}
            moduleStyles={mainCourseModule}
          />
        </div>
        <div className={styles.container}>
          {data.data.length === 0 ? <NotFound /> : <Card data={data} />}
        </div>
        <ContactUs />
      </div>
    );
  }
};
export default FinancialSimulator;
