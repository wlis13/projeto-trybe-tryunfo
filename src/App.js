/* eslint-disable no-magic-numbers */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
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
      const somaPrudut = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= 210;
      const cadaValor = Number(cardAttr1) <= 90
        && Number(cardAttr2) <= 90 && Number(cardAttr3) <= 90;
      const valoresNegativos = Number(cardAttr1) < 0
        || Number(cardAttr2) < 0 || Number(cardAttr3) < 0;

      if (emptyFields && somaPrudut && cadaValor && valoresNegativos === false) {
        this.setState({ isSaveButtonDisabled: false });
      } else { this.setState({ isSaveButtonDisabled: true }); }
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1 } = this.state;
    const { cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const { cardTrunfo, name, isSaveButtonDisabled } = this.state;
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
        />
        <Form
          name={ name }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
