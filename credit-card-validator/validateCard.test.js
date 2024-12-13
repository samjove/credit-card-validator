const { isValidCardNumber, getCardType } = require("./utils/cardValidation");

describe("Credit Card Validation - Edge Cases", () => {
  test("Empty Card Number", () => {
    expect(isValidCardNumber("")).toBe(false);
    expect(getCardType("")).toBe("Unknown");
  });

  test("Non-Numeric Card Number", () => {
    expect(isValidCardNumber("abcd1234efgh")).toBe(false);
    expect(getCardType("abcd1234efgh")).toBe("Unknown");
  });

  test("Too Short Card Number", () => {
    expect(isValidCardNumber("4111")).toBe(false);
    expect(getCardType("4111")).toBe("Unknown");
  });

  test("Too Long Card Number", () => {
    expect(isValidCardNumber("41111111111111112222")).toBe(false);
    expect(getCardType("41111111111111112222")).toBe("Unknown");
  });

  test("Card Number with Special Characters", () => {
    expect(isValidCardNumber("4111-1111-1111-1111")).toBe(false);
    expect(getCardType("4111-1111-1111-1111")).toBe("Unknown");
  });

  test("Valid Visa Card", () => {
    expect(isValidCardNumber("4111111111111111")).toBe(true);
    expect(getCardType("4111111111111111")).toBe("Visa");
  });

  test("Valid MasterCard", () => {
    expect(isValidCardNumber("5105105105105100")).toBe(true);
    expect(getCardType("5105105105105100")).toBe("MasterCard");
  });

  test("Valid Discover Card", () => {
    expect(isValidCardNumber("6011111111111117")).toBe(true);
    expect(getCardType("6011111111111117")).toBe("Discover");
  });

  test("Invalid Card Prefix", () => {
    expect(isValidCardNumber("9111111111111111")).toBe(false);
    expect(getCardType("9111111111111111")).toBe("Unknown");
  });
});
