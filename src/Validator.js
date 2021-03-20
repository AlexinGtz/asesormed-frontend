export default class Validator {
  static isMailValid(mail) {
    return /\S+@\S+[.]\S+/i.test(mail);
  }

  static isPhoneValid(phone, digits) {
    return phone.length === digits;
  }

  static isIntAmountValid(amount) {
    return /\d/i.test(amount);
  }

  static isFloatAmountValid(amount) {
    return /\d+[.]\d+/i.test(amount);
  }

  static isDateValid(date, onlyFuture = false) {
    if (date !== "") {
      if (onlyFuture) {
        const chosenDate = new Date(date + "T00:00:00");
        if (chosenDate.getTime() >= Date.now()) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  static isHourValid(hour) {
    return hour !== "" ? true : false;
  }

  static isStringValid(string, length) {
    return string.length >= length ? true : false;
  }
}
