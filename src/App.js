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
      hasTrunfo: true,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { cardName, cardDescription, cardAttr1 } = this.state;
    const { cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const { cardTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Card
          name=""
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
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
