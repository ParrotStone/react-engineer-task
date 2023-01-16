import { StyledStarsContainer } from './styled/StarsContainer.styled';
import star from '../assets/star.svg';
import filledStar from '../assets/star-filled.svg';
import halfStar from '../assets/half-star.svg';


function StarsComponent({ numOfStars }) {
  return (
    <StyledStarsContainer>
      {
        Array(10).fill(1).map((review, index) => (
          numOfStars >= index + 1 ?
            (<img key={`star-${index}`} src={filledStar} alt="filled-star" />)
            :
            (index + 1) - numOfStars < 1 ?
              <img key={`star-${index}`} src={halfStar} alt="filled-star" /> :
              <img key={`star-${index}`} src={star} alt="star" />
        ))
      }
    </StyledStarsContainer>
  );
}

export default StarsComponent;