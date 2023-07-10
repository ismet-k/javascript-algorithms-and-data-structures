import { formatString, reverseString } from "./utils/stringFunctions.js";

/**
 * Checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. Non-alphanumeric characters are ignored during the comparison.
 * @param {string} string The input string to check for palindrome.
 * @returns Returns true if the input string is a palindrome, false otherwise.
 */
const palindrome = (string) => reverseString(string) === formatString(string);

export default palindrome;