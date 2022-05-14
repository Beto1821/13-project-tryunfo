import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { data, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        Descrição
        <textarea
          data-testid={ data }
          name={ name }
          value={ value }
          onChange={ onChange }
          rows="5"
          cols="20"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
