// Card processing fee: 2.9% + 30 cents, rounded to the nearest cent.
// Example: processingFee(10_000) === 320 (i.e. $3.20 on a $100.00 charge).
export function processingFee(amountCents) {
  if (!Number.isInteger(amountCents) || amountCents <= 0) {
    throw new RangeError("amountCents must be a positive integer");
  }
  return Math.round(amountCents * 0.029) + 30;
}
