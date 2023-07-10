import currencyUnits from "./utils/currencyUnits.js";

/**
 * Calculates the change to be given based on the price of an item, the cash provided, and the available cash in the cash register.
 * @param {number} price The price of the item.
 * @param {number} cash The cash provided by the customer.
 * @param {Array} cid The cash in the cash register, represented as an array of arrays. Each inner array has two elements: [currency, amount].
 * @returns An object containing the status and the change to be given.
 */
const checkCashRegister = (price, cash, cid) => {
  const totalCid = cid.reduce((acc, [, amount]) => acc + amount, 0);

  if (totalCid < cash - price) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid === cash - price) {
    return { status: "CLOSED", change: cid };
  }

  let changeDue = cash - price;
  let change = [];

  cid.reverse().forEach(([currency, amount]) => {
    const unitValue = currencyUnits[currency];
    let currencyAmount = 0;

    while (amount > 0 && changeDue >= unitValue) {
      changeDue -= unitValue;
      amount -= unitValue;
      currencyAmount += unitValue;
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (currencyAmount > 0) {
      change.push([currency, currencyAmount]);
    }
  });

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
};

export default checkCashRegister;
