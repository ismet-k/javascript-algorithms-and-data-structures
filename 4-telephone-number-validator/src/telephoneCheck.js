import phoneNumberFormat from "./utils/phoneNumberFormat.js";

/**
 * Validates if a given phoneNumber is in a valid US phone number format.
 * @param {string} phoneNumber The phone number to be checked.
 * @returns Returns true if the phoneNumber is in a valid format, false otherwise.
 */
const telephoneCheck = (phoneNumber) => phoneNumberFormat.test(phoneNumber);

export default telephoneCheck;
