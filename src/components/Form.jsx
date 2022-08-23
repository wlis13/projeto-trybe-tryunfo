import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form className="container">
        <label htmlFor="input-text-one">
          <input
            className="itensInput"
            data-testid="name-input"
            type="text"
            id="input-text-one"
          />
        </label>
        <label htmlFor="input-textarea">
          <textarea
            className="itensInput"
            data-testid="description-input"
            id="inpu-textarea"
          />
        </label>
        <label htmlFor="input-number-one">
          <input
            className="itensInput"
            data-testid="attr1-input"
            type="number"
            id="input-number-one"
          />
        </label>
        <label htmlFor="input-number-two">
          <input
            className="itensInput"
            data-testid="attr2-input"
            type="number"
            id="input-number-two"
          />
        </label>
        <label htmlFor="input-number-three">
          <input
            className="itensInput"
            data-testid="attr3-input"
            type="number"
            id="input-number-three"
          />
        </label>
        <label htmlFor="input-text-two">
          <input
            className="itensInput"
            data-testid="image-input"
            type="text"
            id="input-text-two"
          />
        </label>
        <label htmlFor="input-select">
          <select
            className="itensInput"
            data-testid="rare-input"
            id="input-select"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito-raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="input-checkbox">
          <input
            className="itensInput"
            data-testid="trunfo-input"
            type="checkbox"
            id="input-checkbox"
          />
        </label>
        <button data-testid="save-button" type="submit">
          Salvar
        </button>
      </form>
    );
  }
}
