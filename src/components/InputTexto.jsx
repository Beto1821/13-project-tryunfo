import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTexto extends Component {
  render() {
    const { data, type, name } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input data-testid={ data } type={ type } name={ name } />
      </label>
    );
  }
}

InputTexto.propTypes = {
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputTexto;
