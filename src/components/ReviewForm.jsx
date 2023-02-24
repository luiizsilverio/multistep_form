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
  return (
      <div className="review-form">
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" value="unsatisfied" name="review" required />
            <BsEmojiFrown />
            {/* <BsFillEmojiFrownFill /> */}
            <p>Insatisfeito</p>
          </label>
          <label className="radio-container">
            <input type="radio" value="neutral" name="review" required />
            <BsEmojiNeutral />
            {/* <BsFillEmojiNeutralFill /> */}
            <p>Poderia ser melhor</p>
          </label>
          <label className="radio-container">
            <input type="radio" value="satisfied" name="review" required />
            <BsEmojiSmile />
            {/* <BsFillEmojiSmileFill /> */}
            <p>Satisfeito</p>
          </label>
          <label className="radio-container">
            <input type="radio" value="very_satisfied" name="review" required />
            <BsEmojiHeartEyes />
            {/* <BsFillEmojiHeartEyesFill /> */}
            <p>Muito satisfeito</p>
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comentário:</label>
          <textarea name="comment" id="comment" required
            placeholder='Conte como foi sua experiência com o produto...'
          />
        </div>
      </div>
  )
}

export default ReviewForm;
