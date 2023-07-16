// function for validating email
const validateEmail = (email) => {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // function for validating password
const validatePassword = (password) => {
  // Use a regular expression to validate the password format
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    let validate = [];
    validate.push();
    validate.push();
    validate.push();
    validate.push();
    validate.push();
    return (
      uppercaseRegExp.test(password) &&
      lowercaseRegExp.test(password) &&
      digitsRegExp.test(password) &&
      specialCharRegExp.test(password) &&
      minLengthRegExp.test(password)
    );
  };
  export {validateEmail,validatePassword};