
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