import styles from './component.module.css';
import no_results from '../../../public/assets/NoResults.jpg';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div>
      <Image src={no_results} className={styles.image} />
      <div className={styles.title}>Sorry courses not found ;(</div>
    </div>
  );
};

export default NotFound;
