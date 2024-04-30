import CardList from '../CardList/CardList';
import axios from 'axios';

const fetchQuizData = async () => {
  //   try {
  //     const response = await axios.get(`http://86.107.44.136:8000/courses/quiz/get_quizzes/`);
  //   } catch (error) {
  //     throw error;
  //   }
  //   return response.data;
};
const data = {
  title: 'Quiz',
  content:
    'Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consect. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.  ',
};

const quizStyles = {
  title: { color: '#FE602F', fontSize: '32px', fontWeight: '1000', padding: '30px 0' },
  content: { color: '#1F1C14', opacity: '0.7', padding: '20px 0' },
  description: {},
  footer: {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid #D9D9D9',
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

const QuizCard = ({ course_id }) => (
  <CardList
    fetchData={fetchQuizData}
    constantData={data}
    cardStyle={quizStyles}
    buttonLink={`/course/quiz/${course_id}`}
  />
);

export default QuizCard;
