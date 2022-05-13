import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTexto extends Component {
  render() {
    const { data, type, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input
          data-testid={ data }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTexto.propTypes = {
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTexto;
