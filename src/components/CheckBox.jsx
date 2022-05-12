import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  render() {
    const { data, name } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input type="checkbox" data-testid={ data } name={ name } />
      </label>
    );
  }
}
CheckBox.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default CheckBox;
