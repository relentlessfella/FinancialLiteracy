import Link from 'next/link';
import Image from 'next/image';
import notFound from '../../public/assets/404.png';
import styles from './page.module.css';
import { alfaSlabOne } from '@/fonts';
export default function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.notFoundMain}>
        <h2 className={alfaSlabOne.className} style={{ color: '#FE602F' }}>
          Not Found
        </h2>
        <p>Could not find requested resource</p>
        <Image src={notFound} className={styles.notFoundImg} />
        <button
          style={{
            border: 'none',
            backgroundColor: '#A2BF00',
            borderRadius: '10px',
            padding: '10px',
          }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#FFFFFF', fontWeight: '700' }}>
            Return Home
          </Link>
        </button>
      </div>
    </div>
  );
}
