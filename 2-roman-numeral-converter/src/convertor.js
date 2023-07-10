import romanNumerals from "./utils/romanNumerals.js";

/**
 * This function takes a decimal number as input and returns its equivalent Roman numeral as output.
 * @param {number} num The number to be converted.
 * @returns The Roman numeral representation of the input number.
 */
function convertToRoman(num) {
  let roman = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    const { value, symbol } = romanNumerals[i];
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }

  return roman;
}

export default convertToRoman;