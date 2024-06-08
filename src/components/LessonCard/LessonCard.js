import CardList from '../CardList/CardList';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useIsMobile } from '@/configs/axios/isMobile';
import styled from 'styled-components';

const LessonCard = ({ id }) => {
  const params = useParams();
  const isMobile = useIsMobile();
  const Button = styled.button`
    background-color: #a2bf00;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 15px;
    padding: 12px 62px;
    margin: 30px 0;
    cursor: pointer;
    &:hover {
      background-color: #8ea200;
    }
  `;
  const lessonStyles = {
    title: { color: '#FE602F', fontSize: '32px', fontWeight: '1000', padding: '30px 0' },
    content: { color: '#1F1C14', opacity: '0.7', padding: '20px 0' },
    description: {},
    footer: {
      borderTop: '1px solid #D9D9D9',
      display: 'flex',
      justifyContent: `${isMobile ? 'center' : 'flex-end'}`,
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
  const fetchLessonData = async () => {
    const response = await axios.get(
      `http://localhost:8000/courses/lesson/${params.id}/get_lessons/`,
    );
    return response.data;
  };
  return (
    <CardList fetchData={fetchLessonData} cardStyle={lessonStyles} buttonLink={`/lesson/${id}`} />
  );
};

export default LessonCard;
