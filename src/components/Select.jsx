import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { data, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <select data-testid={ data } name={ name } value={ value } onChange={ onChange }>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
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
