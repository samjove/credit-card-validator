function isValidCardNumber(number) {
  const regex = /^[0-9]{13,16}$/;
  return regex.test(number) && luhnCheck(number);
}

function getCardType(number) {
  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) return "Visa";
  if (/^5[1-5][0-9]{14}$/.test(number)) return "MasterCard";
  if (/^6011[0-9]{12}|^65[0-9]{14}$/.test(number)) return "Discover";
  return "Unknown";
}

function luhnCheck(number) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i), 10);
    if (shouldDouble) digit *= 2;
    if (digit > 9) digit -= 9;
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

module.exports = { isValidCardNumber, getCardType };
