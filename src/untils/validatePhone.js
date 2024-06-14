export function validatePhone(phoneNumber) {
  // Kiểm tra số điện thoại có bắt đầu bằng dấu cộng và theo sau là các chữ số
  if (/^0\d{9}$/.test(phoneNumber) || /^\84\d{9}$/.test(phoneNumber)) {
    return { isValid: true, message: "" };
  }

  return { isValid: false, message: "Not a Vietnamese phone number" };
}
