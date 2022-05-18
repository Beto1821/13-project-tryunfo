import React from 'react';
import PropTypes from 'prop-types';

export default class Delete extends React.Component {
  render() {
    const { onClick, cardName } = this.props;
    return (
      <button
        data-testid="delete-button"
        type="button"
        onClick={ onClick }
        name={ cardName }
      >
        Excluir
      </button>
    );
  }
}

Delete.propTypes = {
  onClick: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
};
