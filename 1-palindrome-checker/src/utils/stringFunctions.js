import isAlphaNumeric from "./isAlphaNumeric.js";
/**
 * Reverses a string, removes non-alphanumeric characters, and converts to lowercase.
 * @param {string} string The input string to be reversed.
 * @returns The reversed string with non-alphanumeric characters removed and converted to lowercase.
 */
const reverseString = (string) =>
  string
    .split("")
    .reverse()
    .filter((character) => isAlphaNumeric.test(character))
    .join("")
    .toLowerCase();
/**
 * Removes non-alphanumeric characters from a given string and converts it to lowercase.
 * @param {string} string The input string to be formatted.
 * @returns The formatted string with only alphanumeric characters in lowercase.
 */
const formatString = (string) =>
  string
    .split("")
    .filter((char) => isAlphaNumeric.test(char))
    .join("")
    .toLowerCase();

export { reverseString, formatString };
