# Cryptomus SDK

The Cryptomus SDK is a TypeScript library that provides a client interface for interacting with the Cryptomus API. It offers convenient methods for handling payment, payout, and webhook-related operations. This README provides an overview of the library and instructions for getting started.

## Installation

You can install the Cryptomus SDK via npm:

```bash
npm install cryptomus-sdk
```

## Usage

To use the Cryptomus SDK in your project, follow these steps:

1. Import the necessary classes:

```javascript
import { CryptomusClient } from 'cryptomus-sdk';
```

2. Initialize the `CryptomusClient` with your merchant UUID:

```javascript
const merchantUuid = 'your-merchant-uuid';
const cryptomusClient = new CryptomusClient(merchantUuid);
```

3. Use the client to interact with different parts of the API:

### Payment

```javascript
const apiPaymentKey = 'your-api-payment-key';
const paymentClient = cryptomusClient.payment(apiPaymentKey);

// Use paymentClient to perform payment-related operations
```

### Payout

```javascript
const apiPayoutKey = 'your-api-payout-key';
const payoutClient = cryptomusClient.payout(apiPayoutKey);

// Use payoutClient to perform payout-related operations
```

### Webhook

```javascript
const apiKey = 'your-webhook-api-key';
const checkClientIp = true; // Optional parameter
const webhookClient = cryptomusClient.webhook(apiKey, checkClientIp);

// Use webhookClient to work with webhook-related functionality
```

Note: `apiKey` should correspond to either your API Payment Key or API Payout Key, depending on the type of webhook you are configuring.


## API Documentation

For detailed information on available methods and their parameters, refer to the [API Documentation](https://doc.cryptomus.com/) section.

## Contributing

We welcome contributions to the Cryptomus SDK. If you find a bug or have an enhancement in mind, please submit an issue or create a pull request on [GitHub](https://github.com/noteeeeee/cryptomus-sdk).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please [open an issue](https://github.com/noteeeeee/cryptomus-sdk/issues) on GitHub.