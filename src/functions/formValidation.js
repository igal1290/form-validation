export default function formValidation(values) {
  let errors = {};

  // Username validation
  if (!values.username.trim()) {
    errors.username = 'Username is required';
  } else if (values.username.length < 4 || values.username.length > 16) {
    errors.username = 'Username must be 4-16 characters';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is not valid';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4 || values.password.length > 16) {
    errors.password = 'Password must be 4-16 characters';
  }

  // Confirm password validation
  if (!values.password2) {
    errors.password2 = 'Password confirmation is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Password does not match';
  }

  return errors;
}
