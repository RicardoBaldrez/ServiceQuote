interface QuoteServiceInput {
  price: number;
  quantity: number;
}

export function calculateQuoteTotals(
  services: QuoteServiceInput[],
  discountPct: string | number,
) {
  const totalPrice = services.reduce(
    (total, service) => total + Number(service.price * service.quantity),
    0,
  );

  const discountValue = totalPrice * (Number(discountPct) / 100);
  const totalPriceWithDiscount = totalPrice - discountValue;
  const totalDiscount = totalPrice - totalPriceWithDiscount;

  return { totalPrice, discountValue, totalPriceWithDiscount, totalDiscount };
}
