export const getPrice = (price) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency: price.currency,
  });
  return formatter.format(price.amount + price.decimals);
};
