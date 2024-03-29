import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTexto from './InputTexto';
import TextArea from './TextArea';
import Select from './Select';
import CheckBox from './CheckBox';
import Button from './Button';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <div className="inputs">
          <InputTexto
            data="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </div>
        <div className="inputs">
          <TextArea
            data="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </div>
        <div className="inputs">
          <InputTexto
            data="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </div>
        <div className="inputs">
          <InputTexto
            data="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </div>
        <div className="inputs">
          <InputTexto
            data="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <div className="inputs">
          <InputTexto
            data="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <div className="inputs">
          <Select
            data="rare-input"
            type="select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          />
        </div>
        {!hasTrunfo ? (
          <div className="inputs">
            <CheckBox
              data="trunfo-input"
              name="cardTrunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </div>
        ) : <p>Você já tem um Super Trunfo em seu baralho</p>}
        <div className="inputs">
          <Button
            data="save-button"
            name="Salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </div>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
