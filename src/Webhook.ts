import * as crypto from "crypto";

export class Webhook {
  private apiKey: string;
  private checkClientIp: boolean | undefined;

  constructor(apiKey: string, checkClientIp?: boolean) {
    this.apiKey = apiKey;
    this.checkClientIp = checkClientIp;
  }

  /**
   * Verify a webhook signature.
   * @param {string} requestBody - The JSON-encoded request body from the webhook.
   * @param {string} clientIpAddress - Client IP Address.
   * @returns {boolean} True if the signature is valid, false otherwise.
   */
  verifySignature(
    requestBody: Record<string, any>,
    clientIpAddress?: string
  ): boolean {
    // Extract the signature from the data and remove it
    const receivedSignature = requestBody.sign;
    delete requestBody.sign;

    // Calculate the expected signature
    const expectedSignature = crypto
      .createHash("md5")
      .update(
        Buffer.from(JSON.stringify(requestBody, null, 0), "utf8").toString(
          "base64"
        ) + this.apiKey
      )
      .digest("hex");

    // Compare the received and expected signatures
    const isSignatureValid = crypto.timingSafeEqual(
      Buffer.from(expectedSignature, "hex"),
      Buffer.from(receivedSignature, "hex")
    );

    // Check if the client's IP address matches the allowed IP address
    const isIpAddressValid =
      !this.checkClientIp || clientIpAddress === "91.227.144.54";

    // Return true only if both signature and IP address are valid
    return isSignatureValid && isIpAddressValid;
  }
}
