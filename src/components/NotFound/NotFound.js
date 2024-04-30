import styles from './component.module.css';
import no_results from '../../../public/assets/NoResults.jpg';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className={styles.main}>
      <Image src={no_results} className={styles.image} alt="Not found image" />
      <div className={styles.title}>Sorry courses not found ;(</div>
    </div>
  );
};

export default NotFound;
