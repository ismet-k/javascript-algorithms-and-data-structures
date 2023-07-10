/**
 * Function to perform ROT13 decoding on a given string.
 * @param {string} string The input string to be decoded using ROT13.
 * @returns The decoded string.
 */
function rot13(string) {
  let decodedStr = "";

  for (let i = 0; i < string.length; ++i) {
    const charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decodedStr += String.fromCharCode(decodedCharCode);
    } else {
      decodedStr += string.charAt(i);
    }
  }

  return decodedStr;
}
export default rot13;
