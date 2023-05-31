
// Function to validate email format
exports.validateEmail = function(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if( emailRegex.test(email))
    return true;
  else {
    showError(email, 'Invalid email format');
    return false;
  }
};

// Function to validate password length
exports.validatePassword = function(password) {
  const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if ((password.length >= 8) && specialCharacterRegex.test(password))
    return true;
  else {
    showError(password, 'Invalid password format');
    return false;
  }
  
};

function showError(inputElement, errorMessage) {
  var errorSpan = inputElement.nextElementSibling;
  errorSpan.textContent = errorMessage;
  errorSpan.style.display = errorMessage ? 'block' : 'none';
}

//showError(emailInput, 'Invalid email format');

//var loginForm = document.getElementById('login-form');
//loginForm.addEventListener('submit', validateForm);
/*// register.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear previous error message
    errorMessage.innerHTML = '';

    // Get form inputs
    const username = document.getElementById('username-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;

    // Add your validation logic here
    if (username.length < 5) {
      displayErrorMessage('Username should be at least 5 characters long.');
    }
    if (!validateEmail(email)) {
      displayErrorMessage('Invalid email address.');
    }
    if (password.length < 8) {
      displayErrorMessage('Password should be at least 8 characters long.');
    }

    // Submit the form if there are no errors
    if (errorMessage.innerHTML === '') {
      form.submit();
    }
  });

  function displayErrorMessage(message) {
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.textContent = message;
    errorMessage.appendChild(errorSpan);
  }

  function validateEmail(email) {
    // Add your email validation logic here
    // Return true if the email is valid, false otherwise
  }
});
*/