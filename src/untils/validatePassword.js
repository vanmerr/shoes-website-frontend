const validatePassword = (password) => {
  if (password.length < 8)
    return { result: false, message: "Minimum 8 characters" };
  else if (!/[A-Z]/.test(password))
    return {
      result: false,
      message: "Must have at least 1 uppercase letter",
    };
  else if (!/[\W_]/.test(password))
    return {
      result: false,
      message: "Must have at least 1 special character",
    };
  else if (!/\d/.test(password))
    return { result: false, message: "Must have at least 1 number" };
  else return { result: true, message: "Password accepted" };
};

export default validatePassword;
