const Validator = require("validator");
const isEmpty = require("is-empty");


// think about this >> register with username and email to avoid duplicates; have secret code for registration saved in process.env? username will show owner of posts???

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // convert empty fields
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Email Checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
  }
};
