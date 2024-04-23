import React, { useState } from 'react';
import styles from './component.module.css';
import filterImage from '../../../public/assets/mobile/filter.svg';
import Image from 'next/image';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { inter } from '@/app/main/page';
import categories from '../../components/CourseCategory/categoriesData';
import tick from '../../../public/assets/filterImg/tick.svg';
import { useMainContext } from '@/contexts/ContextProvider/ContextProvider';

const Filter = () => {
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
    <div className={styles.main}>
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className={styles.filterImage} aria-label="Update dimensions">
              <Image src={filterImage} />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className={styles.PopoverContent} sideOffset={5} align="end">
              <div style={{ display: 'flex', flexDirection: 'column' }} className={inter.variable}>
                <p className={styles.Text}>Categories</p>
                {categories.map((item) => (
                  <button
                    className={
                      item.title === category.Money ||
                      item.title === category.Bank ||
                      item.title === category.Investment ||
                      item.title === category.Currency ||
                      item.title === category.Credit ||
                      item.title === category.Stock
                        ? styles.buttonActive
                        : styles.button
                    }
                    onClick={() => toggleCategory(item.title)}>
                    <div style={{ display: 'flex' }}>
                      <Image src={item.image} className={styles.image} />
                      <div className={styles.title}>{item.title}</div>
                    </div>
                    {item.title === category.Money ||
                    item.title === category.Bank ||
                    item.title === category.Investment ||
                    item.title === category.Currency ||
                    item.title === category.Credit ||
                    item.title === category.Stock ? (
                      <Image className={styles.tickImg} src={tick} width={25} height={25} />
                    ) : (
                      ''
                    )}
                  </button>
                ))}
              </div>
              <Popover.Arrow className={styles.PopoverArrow} />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
};
export default Filter;
