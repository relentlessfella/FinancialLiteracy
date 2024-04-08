import styles from './component.module.css';
import play from '../../../public/assets/play.svg';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const CourseCard = ({ data }) => {
  const router = useRouter();
  return data.map((item) => (
    <li className={styles.profileLessonCard}>
      <div
        style={{
          fontSize: '28px',
          color: '#FE602F',
          fontWeight: '1000',
          margin: '20px 0',
        }}>
        Course name:
        <br /> {item.name}
      </div>
      <div
        style={{
          fontSize: '18px',
          color: '#1F1C14',
          opacity: '0.7',
          padding: '20px 0',
        }}>
        {item.description}
      </div>
      <div style={{ display: 'flex' }}>
        <Image src={play} width={48} height={48} />
        <div style={{ margin: '13px 10px 0 10px' }}>
          <div style={{ margin: 'auto 0px', color: '#A2BF00', fontWeight: '500' }}>
            {item.lesson_num} Lessons
          </div>
          <div style={{ display: 'flex', marginTop: '10px' }}>
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
