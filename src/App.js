import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onSaveButtonClick = () => {
    this.setState(
      ({
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        deck,
      }) => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
      }),
    );
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    this.setState(
      ({
        cardName,
        cardDescription,
        cardRare,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      }) => {
        const maxTotal = 210;
        const valorMax = 90;
        const valorMim = 0;

        const attr1 = Number(cardAttr1);
        const attr2 = Number(cardAttr2);
        const attr3 = Number(cardAttr3);

        if (
          cardName.length > 0
          && cardDescription.length > 0
          && cardImage.length > 0
          && cardRare.length > 0
          && attr1 <= valorMax
          && attr1 >= valorMim
          && attr2 <= valorMax
          && attr2 >= valorMim
          && attr3 <= valorMax
          && attr3 >= valorMim
          && attr1 + attr2 + attr3 <= maxTotal
        ) {
          return { isSaveButtonDisabled: false };
        }
        return { isSaveButtonDisabled: true };
      },
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div className="pai">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}

export default App;
