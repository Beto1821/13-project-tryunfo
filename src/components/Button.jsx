import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { data, name } = this.props;
    return (
      <button type="submit" data-testid={ data } name={ name }>{name}</button>
    );
  }
}

Button.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Button;
