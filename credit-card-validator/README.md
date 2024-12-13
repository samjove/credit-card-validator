# Credit Card Validator

This is a lightweight API for validating credit card numbers and identifying their type (Visa, MasterCard, or Discover). The solution is built using Node.js and the Serverless Framework. It is currently deployed to [AWS](https://9kakluaib4.execute-api.us-east-1.amazonaws.com/validate) and can also be run locally using serverless-offline for testing and demonstration purposes.

## Features

Validates credit card numbers using the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

Identifies card types:
Visa: Starts with 4 and is 13 or 16 digits long.

MasterCard: Starts with 51-55 and is 16 digits long.

Discover: Starts with 6011 or 65 and is 16 digits long.

HTTP POST endpoint for card validation.

Unit tests covering valid and invalid inputs, including edge cases.

## Setup Instructions

### Prerequisites

Node.js (v14.x or higher)
Serverless Framework globally installed:

`npm install -g serverless`

### Installation

Clone the repository:

`git clone https://github.com/samjove/credit-card-validator.git`

`cd credit-card-validator`

Install the required dependencies:

`npm install`

How to Run the Application Locally
Start the server using serverless-offline:

`npx serverless offline`

Access the API locally at:

`http://localhost:3000/validate`

Make a POST request to the endpoint using a tool like Postman or curl:

`POST URL: http://localhost:3000/validate`

Headers: Content-Type: application/json

Request Body:

{
"cardNumber": "4111111111111111"
}

Example Response:

{
"valid": true,
"cardType": "Visa"
}

## Testing

Run the unit tests using Jest:

`npm test`

The test suite includes cases for valid inputs, invalid inputs, and edge cases such as empty strings and non-numeric characters.

## API Details

Endpoint

POST /dev/validate

Request Body: JSON object with a single key:

{
"cardNumber": "4111111111111111"
}
Response:

Success (Valid Card):
{
"valid": true,
"cardType": "Visa"
}

Error (Invalid Card):
{
"valid": false,
"cardType": "Unknown"
}

Error (Missing Card Number):
{
"error": "Card number is required"
}

## Assumptions

### Supported Card Types:

Only Visa, MasterCard, and Discover are supported.

Visa must be 13 or 16 digits and start with 4.

MasterCard must be 16 digits and start with 51-55.

Discover must be 16 digits and start with 6011 or 65.

### Validation Algorithm:

The Luhn Algorithm is used to validate card numbers. Invalid card numbers that fail this checksum are rejected even if their format matches a known card type.

### Environment:

The solution can be run and tested using serverless-offline. The application is deployed to AWS at this [endpoint](https://9kakluaib4.execute-api.us-east-1.amazonaws.com/validate).

### Security:

This solution does not include authentication or rate limiting, as it's a demonstration app.

## Future Improvements

Extend support for other card providers (e.g., American Express, JCB, etc.).

Accept card numbers with formatting characters (e.g., dashes: 4111-1111-1111-1111).

Add API security.

Implement stricter input validation to handle edge cases more robustly.
