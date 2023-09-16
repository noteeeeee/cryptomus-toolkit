import { RequestBuilder } from './RequestBuilder';

export type PayoutData = {
  amount: string;
  currency: string;
  network: string;
  order_id: string;
  address: string;
  is_subtract: string;
  url_callback: string;
};

/**
 * A class for interacting with the payout part of the API.
 */
export class Payout {
  private version: string = 'v1';

  /**
   * Creates a new instance of the Payment class.
   * @param {RequestBuilder} requestBuilder - RequestBuilder object for sending requests.
   */
  constructor(private requestBuilder: RequestBuilder) {}

  /**
   * Create a payout.
   * @param {PayoutData} data - Payout data.
   * @returns {Promise<boolean | any>} Request result.
   * @throws {RequestBuilderException} In case of an error.
   */
  async create(data: PayoutData): Promise<boolean | any> {
    return this.requestBuilder.sendRequest(`${this.version}/payout`, data);
  }

  /**
   * Get payout information by UUID or order_id.
   * @param {{ uuid?: string; order_id?: string }} data - Data for the request.
   * @returns {Promise<boolean | any>} Request result.
   * @throws {RequestBuilderException} In case of an error.
   */
  async info(data: { uuid?: string; order_id?: string } = {}): Promise<boolean | any> {
    return this.requestBuilder.sendRequest(`${this.version}/payout/info`, data);
  }
}
