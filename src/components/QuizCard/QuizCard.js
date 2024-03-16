import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './page.module.css';

const QuizCard = () => {
  const data = [
    {
      title: 'Quiz',
      content:
        'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consect. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.  ',
    },
  ];
  //   const [data, setData] = useState(null);
  const params = useParams();
  const router = useRouter();
  // const fetchLessons = async () => {
  //   const response = await axios.get(
  //     `http://127.0.0.1:8000/courses/lesson/${params.id}/get_lessons/`,
  //   );
  //   console.log('Res', response);
  //   setData(response);
  // };

  // useEffect(() => {
  //   fetchLessons();
  // }, []);

  if (data === null) {
    <div>Loading...</div>;
  } else {
    return (
      <ul style={{ padding: '10px', margin: '0' }}>
        {data.map((item) => (
          <li className={styles.card} key={item.id}>
            <div
              style={{ color: '#FE602F', fontSize: '32px', fontWeight: '1000', padding: '30px 0' }}>
              {item.title}
            </div>
            <div style={{ color: '#1F1C14', opacity: '0.7', padding: '20px 0' }}>
              {item.content}
            </div>
            <div>{item.description}</div>
            <div
              style={{
                borderTop: '1px solid #D9D9D9',
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
              <button
                style={{
                  backgroundColor: '#858585',
                  border: 'none',
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: '600',
                  borderRadius: '15px',
                  padding: '12px 22px',
                  margin: '30px 0 ',
                }}
                onClick={() => router.push('/')}>
                Completed
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
};
export default QuizCard;
