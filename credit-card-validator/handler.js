const { isValidCardNumber, getCardType } = require("./utils/cardValidation");

module.exports.validateCard = async (event) => {
  const { cardNumber } = JSON.parse(event.body);

  if (!cardNumber) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Card number is required" }),
    };
  }

  const valid = isValidCardNumber(cardNumber);
  const cardType = getCardType(cardNumber);

  return {
    statusCode: 200,
    body: JSON.stringify({ valid, cardType }),
  };
};
