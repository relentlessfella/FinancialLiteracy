import React, { useState } from 'react';
import styles from './component.module.css';
import filterImage from '../../../public/assets/mobile/filter.svg';
import Image from 'next/image';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { inter } from '@/app/main/page';
import categories from '../../components/CourseCategory/categoriesData';

const Filter = () => {
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
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
                className={inter.variable}>
                <p className={styles.Text} style={{ marginBottom: 10 }}>
                  Categories
                </p>
                {categories.map((item) => (
                  <button className={styles.button}>
                    {/* <div style={{ width: '40px', height: '40px' }}> */}
                    <Image src={item.image} className={styles.image} />
                    {/* </div> */}
                    <div className={styles.title}>{item.title}</div>
                  </button>
                ))}
              </div>
              <Popover.Close className={styles.PopoverClose} aria-label="Close">
                <Cross2Icon />
              </Popover.Close>
              <Popover.Arrow className={styles.PopoverArrow} />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
};
export default Filter;
