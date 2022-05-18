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
    cards: [],
  };

  onSaveButtonClick = () => {
    const { cardTrunfo } = this.state;
    this.setState(
      ({
        cardName,
        cardDescription,
        cardRare,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cards,
      }) => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cards: [
          ...cards,
          {
            cardName,
            cardDescription,
            cardRare,
            cardImage,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardTrunfo,
          },
        ],
      }),
    );
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
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

  onDelete = (name) => {
    const { cards } = this.state;
    const newDeck = cards.filter((card) => card.cardName !== name);
    this.setState(() => ({
      cards: newDeck,
    }));
    if (cards.every((card) => !card.cardTrunfo));
    this.setState(() => ({
      hasTrunfo: false,
    }));
    // this.setState(({ cards }) => {
    //   if (cards.every((card) => !card.cardTrunfo)) {
    //     return { hasTrunfo: false };
    //   }
    // });
  }

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
      cards,
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
        <div className="deck">
          {cards.map((card, index) => (
            <div className="cards" key={ index }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                hasTrunfo={ card.hasTrunfo }
              />
              <button
                className="buttonCard"
                name={ card.cardName }
                type="button"
                data-testid="delete-button"
                onClick={ () => this.onDelete(card.cardName) }
              >
                Excluir

              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
