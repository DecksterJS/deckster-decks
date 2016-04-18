import Deckster from 'deckster';

/**
 * Represents a set of cards which holds all the available card types of the standard 32-card deck.
 */
export default class Standard32CardDeck extends Deckster.Deck {
  /**
   * Creates a new card deck with the cards of the standard 32-card deck.
   */
  constructor() {
    super(4, 8);
  }

  /**
   * Gets the name of a card.
   * @param {Deckster.Card} card A card of this deck.
   * @param {boolean} isShort Determines whether the name returned should be short or long.
   * @returns {string}
   */
  getCardName(card, isShort = true) {
    if (isShort) {
      let suitNames = {
        0: 'c',
        1: 'd',
        2: 'h',
        3: 's'
      };

      let rankNames = {
        4: 'J',
        5: 'Q',
        6: 'K',
        7: 'A'
      };

      let rank = card.rank;
      return (rank < 4 ? rank + 7 : rankNames[rank]) + suitNames[card.suit];

    } else {
      let suitNames = {
        0: 'Clubs',
        1: 'Diamonds',
        2: 'Hearts',
        3: 'Spades'
      };

      let rankNames = {
        0: 'Seven',
        1: 'Eight',
        2: 'Nine',
        3: 'Ten',
        4: 'Jack',
        5: 'Queen',
        6: 'King',
        7: 'Ace'
      };

      return rankNames[card.rank] + ' of ' + suitNames[card.suit];
    }
  }
}
