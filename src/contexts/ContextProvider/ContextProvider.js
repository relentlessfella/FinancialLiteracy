'use client';
import { useContext, useState, createContext } from 'react';

export const MainContext = createContext({});

export const useMainContext = () => {
  return useContext(MainContext);
};

export const MainContextProvider = ({ children }) => {
  const [testData, setTestData] = useState('Context Works!!!');
  const [activeModule, setActiveModule] = useState(1);
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <MainContext.Provider
      value={{ testData, activeModule, setActiveModule, activeCategory, setActiveCategory }}>
      {children}
    </MainContext.Provider>
  );
};
