import React from 'react';
import Image from 'next/image';
// import { alfaSlabOne } from '@/app/main/page';
import { alfaSlabOne } from '@/fonts';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';
import styles from './component.module.css';
import categories from './categoriesData';

const CourseCategory = () => {
  const { category, setCategories } = useMainContext();
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
    <div className={styles.categoryMain}>
      <div className={`${styles.title} ${alfaSlabOne.className}`}>Category</div>
      <ul className={styles.ul}>
        {categories.map((item) => (
          <li key={item.id} className={styles.li} onClick={() => toggleCategory(item.title)}>
            <div style={{ display: 'flex', margin: 'auto 30px' }}>
              <Image
                src={item.image}
                width={25}
                height={25}
                style={{ margin: 'auto 15px' }}
                alt="Icon of Pen"
              />
              <div style={{ color: '#fff', userSelect: 'none', fontSize: '22px' }}>
                {item.title}
              </div>
            </div>
            <div className={styles.roundCircle}>
              <div
                style={{ borderRadius: '20px' }}
                className={
                  item.title === category.Money ||
                  item.title === category.Bank ||
                  item.title === category.Investment ||
                  item.title === category.Currency ||
                  item.title === category.Credit ||
                  item.title === category.Stock
                    ? styles.category_active
                    : ''
                  // styles.category_active
                }
                // }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCategory;
