import React from 'react';
import Image from 'next/image';
import mask0 from '../../../public/assets/SimulatorPageAssets/Mask0.png';
import mask1 from '../../../public/assets/SimulatorPageAssets/Mask1.png';
import mask2 from '../../../public/assets/SimulatorPageAssets/Mask2.png';
import mask3 from '../../../public/assets/SimulatorPageAssets/Mask3.png';
import mask4 from '../../../public/assets/SimulatorPageAssets/Mask4.png';
import mask5 from '../../../public/assets/SimulatorPageAssets/Mask5.png';
import styles from './component.module.css';
// import { DMSans } from '@/app/main/page';
import { DMSans } from '@/fonts';
import { useRouter } from 'next/navigation';
const data1 = [
  {
    id: 1,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask0,
  },
  {
    id: 2,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask1,
  },
  {
    id: 3,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask2,
  },
  {
    id: 4,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask3,
  },
  {
    id: 5,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask4,
  },
  {
    id: 6,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask5,
  },
  {
    id: 7,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask0,
  },
  {
    id: 8,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask1,
  },
  {
    id: 9,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask2,
  },
  {
    id: 10,
    title: 'Do millennials care about saving?',
    description:
      'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',
    image: mask3,
  },
];
const Card = ({ data }) => {
  const router = useRouter();
  return (
    <ul className={`${styles.ul} ${DMSans.variable}`}>
      {data.data.map((item, key) => (
        <li key={item.id} className={styles.li}>
          <div>
            <div
              style={{
                position: 'absolute',
                margin: '10px 15px',
                backgroundColor: '#A2BF00',
                borderRadius: '17.5px',
                padding: '5px 15px',
                color: '#fff',
              }}>
              {item.level}
            </div>
            <Image src={data1[key].image} alt={data1[key].title} />
          </div>
          <div className={styles.card_text}>
            <div className={styles.card_title}>{item.name}</div>
            {/* <div className={styles.card_description}>{item.description}</div> */}
          </div>
          <button
            className={styles.card_button}
            onClick={() =>
              router.push(`financial-simulator/${item.id}/${item.name.replace(' ', '-')}`)
            }>
            Start
          </button>
        </li>
      ))}
      {console.log(data)}
    </ul>
  );
};

export default Card;
