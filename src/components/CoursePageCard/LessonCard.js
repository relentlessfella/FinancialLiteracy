import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './component.module.css';

const LessonCard = () => {
  const [data, setData] = useState(null);
  const fetchLessons = async () => {
    const response = await axios.get('http://127.0.0.1:8000/courses/lesson/');
    console.log(response);
    setData(response);
  };

  useEffect(() => {
    fetchLessons;
  }, []);

  if (data === null) {
    <div>Loading...</div>;
  } else {
    return (
      <div className={styles.cardMain}>
        <div>
          <div>{data.name}</div>
          <div>
            In this Lesson, Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
            Lorem ipsum dolor sit amet consect. Elementum nisl duis tortor sed. Lorem ipsum dolor
            sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet
            consectetur. Elementum nisl duis tortor sed.{' '}
          </div>
          <div>
            <div>View Lesson Details</div>
            <button>Start</button>
          </div>
        </div>
      </div>
    );
  }
};
export default LessonCard;
