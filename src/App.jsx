import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi';

import './App.css'
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Tanks';
import UserForm from './components/UserForm';
import { useForm } from './hooks/useForm';
import Steps from './components/Steps';

function App() {
  const forms = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ];

  const {currentComponent, currentStep, changeStep, isFirstStep, isLastStep} = useForm(forms);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps step={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {
              !isFirstStep && (
                <button type="button" onClick={(e) => changeStep(currentStep - 1, e)}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )
            }
            {
              !isLastStep ? (
                <button type="submit">
                  <GrFormNext />
                  <span>Avançar</span>
                </button>
              ) : (
                <button type="button">
                  <FiSend />
                  <span>Enviar</span>
                </button>
              )
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
