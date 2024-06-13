'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import QuizLayout from '../QuizLayout/QuizLayout';
import Image from 'next/image';
import sm1 from '@assets/feedbackImages/sm1.svg';
import sm2 from '@assets/feedbackImages/sm2.svg';
import sm3 from '@assets/feedbackImages/sm3.svg';
import sm4 from '@assets/feedbackImages/sm4.svg';
import sm5 from '@assets/feedbackImages/sm5.svg';
import sml1 from '@assets/feedbackImages/sml1.svg';
import sml2 from '@assets/feedbackImages/sml2.svg';
import sml3 from '@assets/feedbackImages/sml3.svg';
import sml4 from '@assets/feedbackImages/sml4.svg';
import sml5 from '@assets/feedbackImages/sml5.svg';
import { poppins } from '@/fonts';
import prev from '@assets/feedbackImages/prevArrow.svg';
import next from '@assets/feedbackImages/nextArrow.svg';
import axios from 'axios';
import Slider from 'react-slick';
import { useParams, useRouter } from 'next/navigation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFetchUser } from '@/contexts/authContext/authContext';
import { getUserFromLocalCookie } from '@/lib/auth';

const Feedback = () => {
  const [keyIndex, setKeyIndex] = useState();
  const { user, loading } = useFetchUser();
  const { id } = getUserFromLocalCookie();
  const router = useRouter();
  const [active, setActive] = useState({
    option_1: false,
    option_2: false,
    option_3: false,
    option_4: false,
    option_5: false,
  });
  const feedback_titles = [
    {
      title: (
        <span>
          Very
          <br />
          unsatisfied
        </span>
      ),
      image: sm1,
      active_image: sml1,
    },
    { title: 'Unsatisfied', image: sm2, active_image: sml2 },
    { title: 'Neutral', image: sm3, active_image: sml3 },
    { title: 'Satisfied', image: sm4, active_image: sml4 },
    {
      title: (
        <span>
          Very
          <br />
          satisfied
        </span>
      ),
      image: sm5,
      active_image: sml5,
    },
  ];
  const params = useParams();
  const fetchFeedBack = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: `http://localhost:8000/courses/feedback/${params.id}/send_feedback/?user_id=${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          rating: keyIndex,
        },
      });
      console.log(response);
      if (response.status === 200) {
        alert('Feedback sent!');
        router.push('/');
      }
      console.log(keyIndex);
    } catch (error) {
      throw error;
    }
  };

  // const handleFeedback = (key) => {
  //   setKeyIndex(key);
  //   setActive((prevState) => ({
  //     // ...prevState,
  //     [`option_${key}`]: !prevState[`option_${key}`],
  //   }));
  // };

  // const handleFeedback = (key) => {
  //   setKeyIndex(key); // Store the selected key index
  //   setActive((prevState) => {
  //     // Reset all options to false, then set the selected option to true
  //     const resetState = Object.keys(prevState).reduce(
  //       (acc, cur) => ({
  //         ...acc,
  //         [cur]: false,
  //       }),
  //       {},
  //     );

  //     return { ...resetState, [`option_${key}`]: true };
  //   });
  // };

  const handleFeedback = (selectedKey) => {
    setKeyIndex(selectedKey); // Optional, depends on what you do with this state
    setActive((prevState) => {
      let newState = { ...prevState };
      Object.keys(newState).forEach((key, index) => {
        // Activate all previous and the selected option
        if (index + 1 <= selectedKey) {
          newState[key] = true;
        }
        if (index + 1 > selectedKey) {
          newState[key] = false;
        }
      });
      return newState;
    });
  };

  const handleFeedbackMobile = (key) => {
    setKeyIndex(key);
    setActive((prevState) => ({
      // ...prevState,
      [`option_${key}`]: !prevState[`option_${key}`],
    }));
  };
  function CustomSlide(props) {
    const { index, image } = props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image className={styles.activeImage} width={126} height={128} src={image} />
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Image
        className={className}
        src={next}
        style={{
          ...style,
          display: 'block',
          color: 'black',
          width: '50px',
          height: '50px',
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Image
        className={className}
        src={prev}
        style={{
          ...style,
          display: 'block',
          color: 'black',
          width: '50px',
          height: '50px',
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow width />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <QuizLayout>
      <div className={`${styles.main} ${poppins.variable}`}>
        <div className={styles.title}>Feedback</div>
        <div className={styles.question}>How would you rate the course?</div>
        <div className={''}>
          <ul className={styles.feedback_images}>
            {feedback_titles.map((item, index) => {
              const isActive = active[`option_${index + 1}`];
              return (
                <li
                  key={index}
                  className={styles.image_block}
                  onClick={() => handleFeedback(index + 1)}>
                  <Image
                    src={isActive ? item.active_image : item.image}
                    width={126}
                    height={128}
                    alt={item.title}
                    className={styles.activeImage}
                  />
                  <div
                    className={styles.image_block_title}
                    style={{ color: isActive ? '#FE602F' : '#858585' }}>
                    {item.title}
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className={styles.mobileFeedbackImages}>
            <div className="slider-container">
              <Slider {...settings} style={{ width: '280px', margin: '0 auto' }}>
                {feedback_titles.map((item, index) => {
                  const isActive = active[`option_${index + 1}`];
                  return (
                    <div key={index} onClick={() => handleFeedbackMobile(index + 1)}>
                      <CustomSlide
                        index={index}
                        image={isActive ? item.active_image : item.image}
                        key={index}
                      />
                      <h4
                        style={{ color: `${isActive ? '#FE602F' : '#858585'}`, margin: '5px 0' }}
                        key={index}>
                        {item.title}
                      </h4>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </ul>
        </div>
        <div>
          <button className={styles.button} onClick={fetchFeedBack}>
            Submit
          </button>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Feedback;
