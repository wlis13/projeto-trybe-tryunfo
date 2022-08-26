/* eslint-disable arrow-body-style */
/* eslint-disable semi */
/* eslint-disable no-alert */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      arraySaveData: [],
      hasTrunfo: false,
    };
  }

  onInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { cardAttr1, cardAttr2, cardAttr3, cardName, cardDescription,
        cardImage, cardRare } = this.state;
      const emptyFields = cardAttr1 && cardAttr2 && cardAttr3 && cardName
        && cardDescription && cardImage && cardRare !== '';
      const somaPrud = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= '210';
      const cadaValor = Number(cardAttr1) <= '90'
        && Number(cardAttr2) <= '90' && Number(cardAttr3) <= '90';
      const valoresNegativos = Number(cardAttr1) < 0
        || Number(cardAttr2) < 0 || Number(cardAttr3) < 0;

      if (emptyFields && somaPrud && cadaValor && valoresNegativos === false) {
        this.setState({ isSaveButtonDisabled: false });
      } else { this.setState({ isSaveButtonDisabled: true }); }
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardAttr1, cardAttr2, cardAttr3, cardName, cardDescription,
      cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    this.setState((prevState) => ({
      arraySaveData: [...prevState.arraySaveData,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardTrunfo,
        hasTrunfo,
      ],
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    }));
    const { arraySaveData } = this.state;
    const valorArray = arraySaveData.filter((itens) => itens.cardTrunfo === true);
    if (valorArray) {
      this.setState({ hasTrunfo: true });
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1 } = this.state;
    const { cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const { cardTrunfo, name, isSaveButtonDisabled, hasTrunfo } = this.state;
    const { arraySaveData } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          arraySaveData={ arraySaveData }
        />
        <Form
          name={ name }
          cardName={ cardName }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardDescription={ cardDescription }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
