import React from 'react';
import Image from 'next/image';
import pen from '../../../public/assets/Pen.png';
import layers from '../../../public/assets/Layers.png';
import database from '../../../public/assets/Database.png';
import pie from '../../../public/assets/Pie.png';
import chart from '../../../public/assets/Chart.png';
import paper from '../../../public/assets/Paper.png';
import { alfaSlabOne } from '@/app/main/page';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

const CourseCategory = () => {
  const {
    activeCategory,
    setActiveCategory,
    bankCategory,
    setBankCategory,
    moneyCategory,
    setMoneyCategory,
    investmentCategory,
    setInvestmentCategory,
    currencyCategory,
    setCurrencyCategory,
    creditCategory,
    setCreditCategory,
    stockCategory,
    setStockCategory,
    category,
    setCategories,
  } = useMainContext();
  // const { bankCategory, setBankCategory } = useMainContext();
  // const { moneyCategory, setMoneyCategory } = useMainContext();
  // const { investmentCategory, setInvestmentCategory } = useMainContext();
  // const { currencyCategory, setCurrencyCategory } = useMainContext();
  // const { creditCategory, setCreditCategory } = useMainContext();
  // const { stockCategory, setStockCategory } = useMainContext();

  console.log(category);
  const toggleCategory = (category) => {
    setCategories(
      (prevCategories) => (
        console.log(prevCategories), //object with keys = null
        {
          ...prevCategories,
          [category]: prevCategories[category] ? null : category,
        }
      ),
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '1460px',
        margin: '0 auto',
      }}>
      <div style={{}}>
        <div
          style={{ margin: '30px auto', width: '1085px', fontSize: '28px', color: '#A2BF00' }}
          className={alfaSlabOne.className}>
          Category
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div
            style={{
              backgroundColor: '#08A5D3',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '350px',
              height: '60px',
              margin: '10px',
            }}
            onClick={() => toggleCategory('Bank')}>
            <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image
                src={pen}
                width={25}
                height={25}
                style={{ margin: '0 15px' }}
                alt="Icon of Pen"
              />
              <div style={{ color: '#fff' }}>Bank</div>
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '15px',
              }}>
              <div
                style={{
                  display: category.Bank === 'Bank' ? 'block' : 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '20px',
                  backgroundColor: '#A2BF00',
                }}></div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#08A5D3',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '350px',
              height: '60px',
              margin: '10px',
            }}
            onClick={() => toggleCategory('Investment')}>
            <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image
                src={layers}
                width={25}
                height={25}
                style={{ margin: '0 15px' }}
                alt="Icon of Layers"
              />
              <div style={{ color: '#fff' }}>Investment</div>
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '15px',
              }}>
              <div
                style={{
                  display: category.Investment === 'Investment' ? 'block' : 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '20px',
                  backgroundColor: '#A2BF00',
                }}></div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#08A5D3',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '350px',
              height: '60px',
              margin: '10px',
            }}
            onClick={() => toggleCategory('Credit')}>
            <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image
                src={paper}
                width={25}
                height={25}
                style={{ margin: '0 15px' }}
                alt="Icon of Papers"
              />
              <div style={{ color: '#fff' }}>Credit</div>
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '15px',
              }}>
              <div
                style={{
                  display: category.Credit === 'Credit' ? 'block' : 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '20px',
                  backgroundColor: '#A2BF00',
                }}></div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#08A5D3',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '350px',
              height: '60px',
              margin: '10px',
            }}
            onClick={() => toggleCategory('Money')}>
            <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image
                src={database}
                width={25}
                height={25}
                style={{ margin: '0 15px' }}
                alt="Icon of Database"
              />
              <div style={{ color: '#fff' }}>Money</div>
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '15px',
              }}>
              <div
                style={{
                  display: category.Money === 'Money' ? 'block' : 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '20px',
                  backgroundColor: '#A2BF00',
                }}></div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#08A5D3',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '350px',
              height: '60px',
              margin: '10px',
            }}
            onClick={() => toggleCategory('Currency')}>
            <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image
                src={pie}
                width={25}
                height={25}
                style={{ margin: '0 15px' }}
                alt="Icon of Pie Chart"
              />
              <div style={{ color: '#fff' }}>Currency</div>
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '15px',
              }}>
              <div
                style={{
                  display: category.Currency === 'Currency' ? 'block' : 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '20px',
                  backgroundColor: '#A2BF00',
                }}></div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#08A5D3',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '350px',
              height: '60px',
              margin: '10px',
            }}
            onClick={() => toggleCategory('Stock')}>
            <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image
                src={chart}
                width={25}
                height={25}
                style={{ margin: '0 15px' }}
                alt="Icon of Chart"
              />
              <div style={{ color: '#fff' }}>Stock</div>
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#fff',
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '15px',
              }}>
              <div
                style={{
                  display: category.Stock === 'Stock' ? 'block' : 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '20px',
                  backgroundColor: '#A2BF00',
                }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
