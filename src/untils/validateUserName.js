export const validateUserName = (username) => {
  // Remove leading and trailing whitespace
  const trimmedUsername = username.trim();

  // Define the result object
  const result = {
    isValid: true,
    message: "",
  };

  // Check if the username contains whitespace or special characters
  const whitespaceRegex = /\s/;
  const specialCharRegex = /[^a-zA-Z0-9]/;

  if (whitespaceRegex.test(trimmedUsername)) {
    result.isValid = false;
    result.message = "Not contain spaces.";
  } else if (specialCharRegex.test(trimmedUsername)) {
    result.isValid = false;
    result.message = "Not contain special characters.";
  }

  // Return the result object
  return result;
};
