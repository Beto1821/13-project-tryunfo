import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  render() {
    const { data, name, checked, onChange, type } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input
          type={ type }
          data-testid={ data }
          name={ name }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}
CheckBox.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default CheckBox;
