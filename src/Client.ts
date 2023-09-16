import { RequestBuilder } from './RequestBuilder';
import { Payment } from './Payment';
import { Webhook } from './Webhook';
import { Payout } from './Payout';

/**
 * A client class for interacting with the Cryptomus API.
 */
export class CryptomusClient {
  private merchantUuid: string

  /**
   * Creates a new instance of the Client class.
   * @param {string} merchantUuid - Merchant's UUID.
   */
  constructor(merchantUuid: string) {
    this.merchantUuid = merchantUuid
  }

  /**
   * Get the payment client for interacting with payment-related API endpoints.
   * @returns {Payment} Payment client instance.
   */
  payment(apiPaymentKey: string): Payment {
    const requestBuilder = new RequestBuilder(this.merchantUuid, apiPaymentKey)
    return new Payment(requestBuilder);
  }

  payout(apiPayoutKey: string): Payout {
    const requestBuilder = new RequestBuilder(this.merchantUuid, apiPayoutKey)
    return new Payout(requestBuilder);
  }

  /**
   * Get the webhook client for interacting with webhook-related API endpoints.
   * @param {string} apiKey - API key for webhook.
   * @param {boolean} checkClientIp - (Optional) Whether to check the client's IP address.
   * @returns {Webhook} Webhook client instance.
   */
  webhook(apiKey: string, checkClientIp?: boolean): Webhook {
    return new Webhook(apiKey, checkClientIp)
  }
}
