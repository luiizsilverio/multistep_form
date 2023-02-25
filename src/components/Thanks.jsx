import { useSelector } from 'react-redux';

import {
  BsEmojiHeartEyes,
  BsEmojiSmile,
  BsEmojiNeutral,
  BsEmojiFrown
} from 'react-icons/bs';

import './Thanks.css';

const emojiData = {
  unsatisfied: <BsEmojiFrown />,
  neutral: <BsEmojiNeutral />,
  satisfied: <BsEmojiSmile />,
  very_satisfied: <BsEmojiHeartEyes />
}

const Thanks = () => {
  const { name, comment, review } = useSelector(state => ({ ...state.data }));

  return (
        <div className='thanks-container'>
          <h2>Falta pouco...</h2>
          <p>
            A sua opinião é muito importante, em breve você receberá um cupom de 10%
            de desconto para a sua próxima compra.
          </p>
          <p>Para concluir sua avaliação, clique no botão de Enviar abaixo.</p>
          <h3>Aqui está o resumo da sua avaliação, {name}:</h3>
          <p className="review-data">
            <span>Satisfação com o produto:</span>
            {emojiData[review]}
          </p>
          <p className="review-data">
            <span>Comentário:</span>
            {comment}
          </p>
        </div>
    )
}

export default Thanks;
