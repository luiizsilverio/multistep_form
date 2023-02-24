const UserForm = () => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required
          placeholder="Digite o seu nome"
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required
          placeholder="Digite o seu e-mail"
        />
      </div>
    </div>
  )
}

export default UserForm;
