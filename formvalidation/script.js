const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');
form.addEventListener('submit', function (e) {
e.preventDefault(); // prevent the form from submitting// validate fields
let isUsernameValid = checkUsername(),
isEmailValid = checkEmail(),
isPasswordValid = checkPassword(),
isConfirmPasswordValid = checkConfirmPassword();
let isFormValid = isUsernameValid
isEmailValid && isPasswordValid && isConfirmPasswordValid;
// submit to the server if the form is valid
if (isFormValid) {
}
});

const checkUsername = () => {
    let valid = false;
    const min = 3,
    max = 25;
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
    showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
    showSuccess(usernameEl);
    valid = true;
    }
    return valid;
   };
   const isRequired = value => value === '' ? false : true;
   const isBetween = (length, min, max) => length < min || length > max ? false :true;

   const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
   };

   const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
   }

   const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid.')
    } else {
    showSuccess(emailEl);
    valid = true;
    }
    return valid;
   };
   const isEmailValid = (email) => {
    const re =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
    return re.test(email);
   };


   const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
    showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
    showError(passwordEl, 'Password must has at least 8 characters that include atleast 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character');
    } else {
    showSuccess(passwordEl);
    valid = true;
    }
    return valid;
   };
   const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
   };
   
   const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, 'The password does not match');
    } else {
    showSuccess(confirmPasswordEl);
    valid = true;
    }
    return valid;
   };
   
