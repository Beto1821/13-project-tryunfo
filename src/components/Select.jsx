import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { data, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <select data-testid={ data } value={ value } onChange={ onChange }>
          <option name={ name }>normal</option>
          <option name={ name }>raro</option>
          <option name={ name }>muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Select;
