// misal harus dimulai dengan 0
// minimum length 9
// maximum length 13
function PhoneNumberValidator(input = "") {
  if (input[0] !== "0") return "first digit must be 0";
  if (input.length >= 9 && input.length <= 13) {
    for (var i = 0; i < input.length; i++) {
      if (!(input[i] >= 0)) {
        return "cannot include characters";
      }
      if (input[i] === " ") {
        return "cannot include white space";
      }
    }
  } else {
    return "length must more than 8 digits and less than 14 digits";
  }

  return true;
}
export default PhoneNumberValidator;
