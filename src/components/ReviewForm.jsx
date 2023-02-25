import { useSelector, useDispatch } from 'react-redux';
import { changeData } from '../redux/formSlice';

import {
  // BsFillEmojiHeartEyesFill,
  // BsFillEmojiSmileFill,
  // BsFillEmojiNeutralFill,
  // BsFillEmojiFrownFill,
  BsEmojiHeartEyes,
  BsEmojiSmile,
  BsEmojiNeutral,
  BsEmojiFrown
} from 'react-icons/bs';

import './ReviewForm.css';

const ReviewForm = () => {
  const { review, comment } = useSelector(state => ({ ...state.data }))
  const dispatch = useDispatch();

  function handleChangeData(data) {
    dispatch(changeData(data));
  }

  return (
      <div className="review-form">
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio"
              name="review" required
              value="unsatisfied"
              checked={review === "unsatisfied"}
              onChange={(e) => handleChangeData({ review: e.target.value })}
            />
            <BsEmojiFrown />
            <p>Insatisfeito</p>
          </label>
          <label className="radio-container">
            <input type="radio"
              name="review" required
              value="neutral"
              checked={review === "neutral"}
              onChange={(e) => handleChangeData({ review: e.target.value })}
            />
            <BsEmojiNeutral />
            <p>Poderia ser melhor</p>
          </label>
          <label className="radio-container">
            <input type="radio"
              name="review" required
              value="satisfied"
              checked={review === "satisfied"}
              onChange={(e) => handleChangeData({ review: e.target.value })}
            />
            <BsEmojiSmile />
            <p>Satisfeito</p>
          </label>
          <label className="radio-container">
            <input type="radio"
              name="review" required
              value="very_satisfied"
              checked={review === "very_satisfied"}
              onChange={(e) => handleChangeData({ review: e.target.value })}
            />
            <BsEmojiHeartEyes />
            <p>Muito satisfeito</p>
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comentário:</label>
          <textarea name="comment" id="comment" required
            placeholder='Conte como foi sua experiência com o produto...'
            value={comment}
            onChange={(e) => handleChangeData({ comment: e.target.value })}
          />
        </div>
      </div>
  )
}

export default ReviewForm;
