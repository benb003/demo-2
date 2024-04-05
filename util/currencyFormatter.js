export const currencyFormatter = (price) => {
  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  return formatter.format(price);
};
