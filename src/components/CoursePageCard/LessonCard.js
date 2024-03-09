import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './component.module.css';
import { useParams } from 'next/navigation';

const LessonCard = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const fetchLessons = async () => {
    // const response = await axios.get('http://127.0.0.1:8000/courses/lesson/');
    const response = await axios.get(
      `http://127.0.0.1:8000/courses/lesson/${params.id}/get_lessons/`,
    );
    console.log(response);
    setData(response);
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  if (data === null) {
    <div>Loading...</div>;
  } else {
    return (
      <ul style={{ padding: '50px', margin: '0' }}>
        {data.data.map((item) => (
          <li className={styles.card} key={item.id}>
            <div>{item.name}</div>
            <div>{item.content}</div>
            <div>{item.description}</div>
            <div>
              <div>View Lesson Details</div>
              <button>Start</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
};
export default LessonCard;
