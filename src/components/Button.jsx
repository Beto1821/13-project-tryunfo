import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { data, name, disabled, onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid={ data }
        disabled={ disabled }
        onClick={ onClick }
      >
        {name}

      </button>
    );
  }
}

Button.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
