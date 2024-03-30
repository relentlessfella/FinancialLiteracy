'use client';
import React, { useEffect, useState } from 'react';
import SimulatorLayout from '@/components/SimulatorLayout/SimulatorLayout';
import CourseModules from '@/components/CourseModules/CourseModules';
import Card from '@/components/SimulatorCard/Card';
import styles from './page.module.css';
import axios from 'axios';
const FinancialSimulator = () => {
  const [activeOption, setActiveOption] = useState(1);
  const [data, setData] = useState(null);
  const options = [
    { id: 1, title: 'Stock' },
    { id: 2, title: 'Investment' },
    { id: 3, title: 'Money' },
    { id: 4, title: 'Credit' },
    { id: 5, title: 'Economy' },
  ];
  const fetchCard = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://127.0.0.1:8000/simulator/fin_trial/',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          stocks: activeOption === 1 ? 'stocks' : '',
          investment: activeOption === 2 ? 'investment' : '',
          money: activeOption === 3 ? 'money' : '',
          credit: activeOption === 4 ? 'credit' : '',
          economy: activeOption === 5 ? 'economy' : '',
        },
      });
      setData(response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchCard();
  }, [activeOption]);

  if (data === null) {
    return <div style={{ textAlign: 'center' }}>Loading..</div>;
  } else {
    return (
      <div>
        <SimulatorLayout>
          <div style={{ margin: '50px' }}>
            <CourseModules
              modules={options}
              width={750}
              activeModule={activeOption}
              setActiveModule={setActiveOption}
              backgroundColor={'rgba(196, 196, 196, 0.15)'}
            />
          </div>
          <div className={styles.container}>
            <Card data={data} />
          </div>
        </SimulatorLayout>
      </div>
    );
  }
};
export default FinancialSimulator;
