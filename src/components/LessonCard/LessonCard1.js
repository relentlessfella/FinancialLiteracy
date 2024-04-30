import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './component.module.css';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Loader from '../Loader/Loader2';
import NotFound from '../NotFound/NotFound';

const LessonCard = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const router = useRouter();
  const fetchLessons = async () => {
    const response = await axios.get(
      `http://localhost:8000/courses/lesson/${params.id}/get_lessons/`,
    );
    setData(response.data);
    console.log(response);
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <Loader />
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <NotFound />
      </div>
    );
  } else {
    return (
      <ul className={styles.ul}>
        {data &&
          data.map((item) => (
            <li className={styles.card} key={item.id}>
              <div
                style={{
                  color: '#FE602F',
                  fontSize: '32px',
                  fontWeight: '1000',
                  padding: '30px 0',
                }}>
                {item.name}
              </div>
              <div style={{ color: '#1F1C14', opacity: '0.7', padding: '20px 0' }}>
                {item.content}
              </div>
              <div style={{ margin: '10px 0' }}>{item.description}</div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #D9D9D9',
                }}>
                <div style={{ color: '#FE602F', fontWeight: '800', margin: 'auto 0' }}>
                  View Lesson Details
                </div>
                <button
                  style={{
                    backgroundColor: '#A2BF00',
                    border: 'none',
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: '600',
                    borderRadius: '15px',
                    padding: '12px 62px',
                    margin: '30px 0 ',
                  }}
                  onClick={() => router.push(`/lesson/${item.id}`)}>
                  Read
                </button>
              </div>
            </li>
          ))}
      </ul>
    );
  }
};
export default LessonCard;
