const Validation = (data) => {
  const errors = {};
  //   console.log(data, "Data");

  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (data.name === "") {
    errors.name = "Name is required";
  }

  if (data.username === "") {
    errors.username = "Username is required";
  }

  if (data.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(data.email)) {
    errors.email = "Invalid Email";
  }

  if (data.password === "") {
    errors.password = "Password is required";
  }

  if (data.password_confirmation === "") {
    errors.password_confirmation = "Confirm your password";
  } else if (data.password !== data.password_confirmation) {
    errors.password_confirmation = "Password doesn't match";
  }

  //   console.log(errors, "ERRR");
  return errors;
};

export default Validation;
