/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1 } = this.props;
    const { cardAttr2, cardAttr3, cardImage } = this.props;
    const { cardTrunfo, isSaveButtonDisabled, onInputChange } = this.props;
    const { cardRare, onSaveButtonClick } = this.props;
    return (
      <form className="container">
        <label htmlFor="input-text-one">
          <input
            className="itensInput"
            data-testid="name-input"
            type="text"
            id="input-text-one"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="input-textarea">
          <textarea
            className="itensInput"
            data-testid="description-input"
            id="inpu-textarea"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="input-number-one">
          <input
            className="itensInput"
            data-testid="attr1-input"
            type="number"
            id="input-number-one"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>
        <label htmlFor="input-number-two">
          <input
            className="itensInput"
            data-testid="attr2-input"
            type="number"
            id="input-number-two"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>
        <label htmlFor="input-number-three">
          <input
            className="itensInput"
            data-testid="attr3-input"
            type="number"
            id="input-number-three"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>
        <label htmlFor="input-text-two">
          <input
            className="itensInput"
            data-testid="image-input"
            type="text"
            id="input-text-two"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <label htmlFor="input-select">
          <select
            className="itensInput"
            data-testid="rare-input"
            id="input-select"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="input-checkbox">
          <input
            className="itensInput"
            data-testid="trunfo-input"
            type="checkbox"
            id="input-checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          type="submit"
          onClick={ onSaveButtonClick }
          name="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
