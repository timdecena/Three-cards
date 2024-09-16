const getCardValue = (card) => {
    const cardName = card.split('/').pop().split('_')[0];
    const valueMap = {
      'jack': 11,
      'queen': 12,
      'king': 13,
      'ace': 14,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'black': 0, // Black Joker
      'red': 0    // Red Joker
    };
    return valueMap[cardName] || 0;
  };
  
  export default getCardValue;
  