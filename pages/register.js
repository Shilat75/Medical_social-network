const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const nameInput = document.getElementById('name-input');
const addressInput = document.getElementById('address-input');
const phoneInput = document.getElementById('phone-input');
const submitBtn = document.querySelector('button[type="submit"]');


    // Function to validate email format
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    // Function to validate password length
    function validatePassword(password) {
        const minLength = 8;
        const hasSpecialCharacter = /[\s~`!@#$%^&*+=\-[\]\\';,/{}|\\":<>?()._]/.test(password);
        
        return password.length >= minLength && hasSpecialCharacter;
      }
  
   
  
    // Function to hide error message
    function hideError(element) {
      const errorContainer = element.nextElementSibling;
      errorContainer.textContent = ' ';
    }
  
    // Function to show error message
    function showError(element, message) {
      const errorContainer = element.nextElementSibling;
      errorContainer.textContent = message;
    }
  
    // Function to handle form submission
    function validateForm() {
      //event.preventDefault();
      hideError(emailInput);
      hideError(passwordInput);
      hideError(usernameInput);
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const username = usernameInput.value.trim();
  
      let hasError = false;
  
      if (!validateEmail(email)) {
        showError(emailInput, 'Invalid email, try again.');
        hasError = true;
      }
  
      if (!validatePassword(password)) {
        showError(passwordInput, 'Password must be between 6 and 20 characters.');
        hasError = true;
      }
  
      if (!validateUsername(username)) {
        showError(usernameInput, 'Username must be between 4 and 20 characters.');
        hasError = true;
      }
  
      if (hasError) {
        return;
      }
  
      // Perform sign up logic here
      fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
        }),
      })
        .then(response => {
          if (response.ok) {
            console.log('Sign up successful');
            signInForm.reset();
          } else {
            throw new Error('Sign up failed');
          }
        })
        .catch(error => {
          console.error('Registration error:', error);
          console.error(error.stack);
  
          // Display the error message to the user
          showError(emailInput, 'The user already exists.');
        });
    }
  
  