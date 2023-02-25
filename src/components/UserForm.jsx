import { useSelector, useDispatch } from 'react-redux';
import { changeData } from '../redux/formSlice';

const UserForm = () => {
  const { name, email } = useSelector(state => ({ ...state.data }))
  const dispatch = useDispatch();

  function handleChangeData(data) {
    dispatch(changeData(data));
  }

  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required
          placeholder="Digite o seu nome"
          value={name}
          onChange={(e) => handleChangeData({ name: e.target.value })}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required
          placeholder="Digite o seu e-mail"
          value={email}
          onChange={(e) => handleChangeData({ email: e.target.value })}
        />
      </div>
    </div>
  )
}

export default UserForm;
