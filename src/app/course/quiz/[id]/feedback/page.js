'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import QuizLayout from '../QuizLayout/QuizLayout';
import Image from 'next/image';
import sm1 from '../../../../../../public/assets/feedbackImages/sm1.svg';
import sm2 from '../../../../../../public/assets/feedbackImages/sm2.svg';
import sm3 from '../../../../../../public/assets/feedbackImages/sm3.svg';
import sm4 from '../../../../../../public/assets/feedbackImages/sm4.svg';
import sm5 from '../../../../../../public/assets/feedbackImages/sm5.svg';
import sml1 from '../../../../../../public/assets/feedbackImages/sml1.svg';
import sml2 from '../../../../../../public/assets/feedbackImages/sml2.svg';
import sml3 from '../../../../../../public/assets/feedbackImages/sml3.svg';
import sml4 from '../../../../../../public/assets/feedbackImages/sml4.svg';
import sml5 from '../../../../../../public/assets/feedbackImages/sml5.svg';
import { poppins } from '@/app/login/page';
import axios from 'axios';
import Slider from 'react-slick';
import { useParams } from 'next/navigation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Feedback = () => {
  const [keyIndex, setKeyIndex] = useState();
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
        url: `http://localhost:8000/courses/feedback/${params.id}/send_feedback/?user_id=1`,
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
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red', marginRight: '30px' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <QuizLayout>
      <div className={`${styles.main} ${poppins.variable}`}>
        <div className={styles.title}>Feedback</div>
        <div className={styles.question}>How would you rate the course?</div>
        <div className={''}>
          <ul className={styles.feedback_images}>
            {/* {feedback_titles.map((item, key) => (
              <li key={key} className={styles.image_block} onClick={() => handleFeedback(key + 1)}>
                {active[`option_${key + 1}`] ? (
                  <>
                    <Image
                      src={item.active_image}
                      width={126}
                      height={128}
                      alt={item.title}
                      className={styles.activeImage}
                    />
                    <div className={styles.image_block_title} style={{ color: '#FE602F' }}>
                      {item.title}
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={item.image}
                      width={126}
                      height={128}
                      alt={item.title}
                      className={styles.activeImage}
                    />
                    <div className={styles.image_block_title}>{item.title}</div>
                  </>
                )}
              </li>
            ))} */}
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
                    style={{ color: isActive ? '#FE602F' : 'inherit' }}>
                    {item.title}
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className={styles.mobileFeedbackImages}>
            <div className="slider-container">
              <Slider {...settings}>
                {feedback_titles.map((item, index) => (
                  <CustomSlide index={index} image={item.image} key={index} />
                ))}
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
