import grayStar from '../../../public/assets/grayStar.svg';
import yellowStar from '../../../public/assets/yellowStar.svg';
import styles from './ImageRating.module.css';
import Image from 'next/image';
function ImageRating({ rating }) {
  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Image key={i} src={yellowStar} width={30} alt="Yellow Star" />);
      } else {
        stars.push(<Image key={i} src={grayStar} width={30} alt="Gray Star" />);
      }
    }
    return stars;
  };

  return (
    <div className={styles.rating}>
      {/* Visual representation of the rating */}
      {renderStars()}
      {/* Actual rating value */}
      <div className={styles.ratingValue}>{}</div>
    </div>
  );
}

export default ImageRating;
