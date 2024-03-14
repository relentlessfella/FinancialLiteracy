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
  const categories = [
    { title: 'Bank', image: pen },
    { title: 'Investment', image: layers },
    { title: 'Credit', image: paper },
    { title: 'Money', image: database },
    { title: 'Currency', image: pie },
    { title: 'Stock', image: chart },
  ];
  const { category, setCategories } = useMainContext();
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
    <div>
      <div
        style={{ margin: '30px auto', width: '1085px', fontSize: '28px', color: '#A2BF00' }}
        className={alfaSlabOne.className}>
        Category
      </div>
      <ul
        style={{
          display: 'flex',
          width: '1460px',
          margin: '0 auto',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {categories.map((item) => (
          <li
            style={{
              backgroundColor: '#08A5D3',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '350px',
              height: '60px',
              margin: '10px',
              cursor: 'pointer',
              flexWrap: 'wrap',
            }}
            onClick={() => toggleCategory(item.title)}>
            <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}>
              <Image
                src={item.image}
                width={25}
                height={25}
                style={{ margin: '0 15px' }}
                alt="Icon of Pen"
              />
              <div style={{ color: '#fff', userSelect: 'none' }}>{item.title}</div>
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
                  display:
                    item.title === category.Money ||
                    item.title === category.Bank ||
                    item.title === category.Investment ||
                    item.title === category.Currency ||
                    item.title === category.Credit ||
                    item.title === category.Stock
                      ? 'block'
                      : 'none',
                  width: '20px',
                  height: '20px',
                  borderRadius: '20px',
                  backgroundColor: '#A2BF00',
                }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCategory;
