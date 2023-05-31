// // Get the sign up and sign in forms
// //const signUpForm = document.getElementById('sign-up-form');
// //const signInForm = document.getElementById('sign-in-form');

// // Function to validate email format
// exports.validateEmail = function(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// // Function to validate password length
// exports.validatePassword = function(password) {
//   const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
//   return (password.length >= 8) && specialCharacterRegex.test(password);
// };

// // Function to handle sign in form submission
// /*exports.signIn =  function (event) {
//   event.preventDefault();
//   console.log('Sign in');
//   const errorMsgIn = document.getElementById('error-msg-in');
//   errorMsgIn.textContent = '';
//   // Validate email and password
//   const email = signInForm.querySelector('input[type="email"]').value;
//   const password = signInForm.querySelector('input[type="password"]').value;

//   if (!validateEmail(email)) {
//     errorMsgIn.textContent = 'Invalid email, try again. ';
//     return;
//   }

//   if (!validatePassword(password)) {
//     errorMsgIn.textContent = 'Password must be 8 characters';
//     return;
//   }
// */
//   // Perform sign in logic here
//   fetch('/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//   })
//     .then(response => response.json())
//     .then(data => window.location.href = data.redirect)
//     .catch(error => {
//       console.error('Sign in error:', error);
//       console.error(error.stack);

//       // Display the error message to the user
//       errorMsgIn.textContent = 'Login failed, verify your details again..';
//     });
// //}
// /*
// // Function to handle sign up form submission
// // exports.signUp = function (event) {
// //   event.preventDefault();
// //   console.log('Sign up');
// //   const errorMsgUp = document.getElementById('error-message');
// //   errorMsgUp.textContent = '';
// //   // Validate email, password, and username
// //   const email = signUpForm.querySelector('input[type="email"]').value;
// //   const password = signUpForm.querySelector('input[type="password"]').value;
// //   const username = signUpForm.querySelector('input[type="text"]').value.trim();

// //   if (!validateEmail(email)) {
// //     errorMsgUp.textContent = 'Invalid email, try again. ';
// //     return;
// //   }

// //   if (!validatePassword(password)) {
// //     errorMsgUp.textContent = 'Password must be 8 characters';
// //     return;
// //   }

//   // Perform sign up logic here
//   fetch('/auth/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//       username: username,
//     }),
//   })
//     .then(response => response.json())
//     .then(data => window.location.href = data.redirect)
//     .catch(error => {
//       console.error('Registration error:', error);
//       console.error(error.stack);

//       // Display the error message to the user
//       errorMsgUp.textContent = 'Registration failed, please try again.';
//     });
// //}

// function showError(errorMessage) {
//   var errorMessageElement = document.getElementById('error-message');
//   errorMessageElement.textContent = errorMessage;
//   errorMessageElement.style.display = errorMessage ? 'block' : 'none';
// }
// /*
// exports.validateForm = function (email, password) {
  
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
  
//   if (!emailRegex.test(email)) {
//     showError('Invalid email format');
//     return false;
//   }
//   if (!passwordRegex.test(password)) {
//     showError('Invalid password format');
//     return false;
//   }
//   showError('');
// }
// */
// var loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', validateForm);
// // Usage example:
// var errorMessage = 'An error occurred.';
// showError(errorMessage);
// // Add event listeners to the sign up and sign in forms
// //signUpForm.addEventListener('submit', signUp);
// //signInForm.addEventListener('submit', signIn);
function showError(inputElement, errorMessage) {
  var errorSpan = inputElement.nextElementSibling;
  errorSpan.textContent = errorMessage;
  errorSpan.style.display = errorMessage ? 'block' : 'none';
}

function validateForm(event) {
  event.preventDefault();

  var emailInput = document.getElementById('email-input');
  var passwordInput = document.getElementById('password-input');

  var email = emailInput.value;
  var password = passwordInput.value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;

  if (!emailRegex.test(email)) {
    showError(emailInput, 'Invalid email format');
    return;
  }

  if (!passwordRegex.test(password)) {
    showError(passwordInput, 'Invalid password format');
    return;
  }

  // Perform form submission if validation passes
  document.getElementById('login-form').submit();
}

var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', validateForm);