import CardList from '../CardList/CardList';
import axios from 'axios';
import { useParams } from 'next/navigation';

// const fetchLessonData = async () => {
//   const params = useParams();
//   const response = await axios.get(
//     `http://localhost:8000/courses/lesson/${params.id}/get_lessons/`,
//   );
//   return response.data;
// };

const lessonStyles = {
  title: { color: '#FE602F', fontSize: '32px', fontWeight: '1000', padding: '30px 0' },
  content: { color: '#1F1C14', opacity: '0.7', padding: '20px 0' },
  description: {},
  footer: {
    borderTop: '1px solid #D9D9D9',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#A2BF00',
    border: 'none',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '15px',
    padding: '12px 62px',
    margin: '30px 0 ',
  },
  buttonText: 'Start',
};

const LessonCard = () => {
  const params = useParams();
  const fetchLessonData = async () => {
    const response = await axios.get(
      `http://localhost:8000/courses/lesson/${params.id}/get_lessons/`,
    );
    return response.data;
  };
  return (
    <CardList
      fetchData={fetchLessonData}
      cardStyle={lessonStyles}
      // buttonStyle={{

      // }}
      //   constantData={null}

      buttonLink={(id) => `/lesson/${id}`}
    />
  );
};

export default LessonCard;
