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
  const [category, setCategories] = useState({
    Bank: null,
    Money: null,
    Investment: null,
    Currency: null,
    Credit: null,
    Stock: null,
  });
  const [bankCategory, setBankCategory] = useState(null);
  const [moneyCategory, setMoneyCategory] = useState(null);
  const [investmentCategory, setInvestmentCategory] = useState(null);
  const [currencyCategory, setCurrencyCategory] = useState(null);
  const [creditCategory, setCreditCategory] = useState(null);
  const [stockCategory, setStockCategory] = useState(null);
  return (
    <MainContext.Provider
      value={{
        testData,
        activeModule,
        setActiveModule,
        activeCategory,
        setActiveCategory,
        category,
        setCategories,
      }}>
      {children}
    </MainContext.Provider>
  );
};
