import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { data, name } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <textarea data-testid={ data } name={ name } rows="5" cols="20" />
      </label>
    );
  }
}

TextArea.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextArea;
