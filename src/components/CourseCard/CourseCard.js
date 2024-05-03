import styles from './component.module.css';
import play from '../../../public/assets/play.svg';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const CourseCard = ({ data }) => {
  const router = useRouter();
  return data.map((item) => (
    <li key={data.id} className={styles.profileLessonCard}>
      <div className={styles.cardTitle}>
        Course name:
        <br /> {item.name}
      </div>
      <div className={styles.cardDescription}>{item.description}</div>
      <div className={styles.progressWrapper}>
        <Image src={play} width={48} height={48} alt="Play icon" />
        <div className={styles.lessonProgress}>
          <div className={styles.lessonTitle}>{item.lesson_num} Lessons</div>
          <div style={{ display: 'flex', marginTop: '10px', outline: '1px solid #000' }}>
            <div style={{ margin: 'auto 0px' }}>
              <ProgressBar value={item.progress} />
            </div>
            <div style={{ color: '#A2BF00', fontSize: '16px', margin: '0 15px' }}>
              {item.progress}%
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => router.push(`/course/${item.id}`)}
          style={{
            color: '#fff',
            backgroundColor: '#A2BF00',
            border: 'none',
            borderRadius: '15px',
            padding: '10px 30px',
            fontFamily: 'var(--font-poppins)',
            fontSize: '16px',
          }}>
          Continue
        </button>
      </div>
    </li>
  ));
};
