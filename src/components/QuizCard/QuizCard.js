import { useIsMobile } from '@/configs/axios/isMobile';
import CardList from '../CardList/CardList';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { getUserFromLocalCookie } from '@/lib/auth';

const data = {
  title: 'Quiz',
  content:
    'Unlock your knowledge and test your understanding by taking our interactive quiz! Challenge yourself with questions tailored to the topics you have been learning.',
};

const QuizCard = ({ course_id }) => {
  const { id } = getUserFromLocalCookie();
  const fetchQuizData = async () => {
    const response = await axios({
      method: 'get',
      url: `http://127.0.0.1:8000/courses/course/${course_id}/`,
      headers: {
        'Content-Type': 'application/json',
      },
      params: { user_id: id },
    });
    console.log('resd', response);
    return response.data;
  };
  const isMobile = useIsMobile();
  const quizStyles = {
    title: { color: '#FE602F', fontSize: '32px', fontWeight: '1000', padding: '30px 0' },
    content: { color: '#1F1C14', opacity: '0.7', padding: '20px 0' },
    description: {},
    footer: {
      display: 'flex',
      borderTop: '1px solid #D9D9D9',
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
    buttonLink: `/course/quiz/${course_id}`,
    buttonLinkFinished: `/course/quiz/${course_id}/score`,
  };
  return (
    <CardList fetchData={fetchQuizData} constantData={data} cardStyle={quizStyles} isQuiz={true} />
  );
};

export default QuizCard;
