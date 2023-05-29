// Get the sign up and sign in forms
const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password length
function validatePassword(password) {
  return password.length >= 8;
}

// Function to handle sign in form submission
function signIn(event) {
  event.preventDefault();
  console.log('Sign in');
  const errorMsgIn = document.getElementById('error-msg-in');
  errorMsgIn.textContent = '';
  // Validate email and password
  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  if (!validateEmail(email)) {
    errorMsgIn.textContent = 'Invalid email, try again. ';
    return;
  }

  if (!validatePassword(password)) {
    errorMsgIn.textContent = 'Password must be 8 characters';
    return;
  }

  // Perform sign in logic here
  fetch('/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(error => {
      console.error('Sign in error:', error);
      console.error(error.stack);

      // Display the error message to the user
      errorMsgIn.textContent = 'Login failed, verify your details again..';
    });
}

// Function to handle sign up form submission
function signUp(event) {
  event.preventDefault();
  console.log('Sign up');
  const errorMsgUp = document.getElementById('error-msg-up');
  errorMsgUp.textContent = '';
  // Validate email, password, and username
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;
  const username = signUpForm.querySelector('input[type="text"]').value.trim();

  if (!validateEmail(email)) {
    errorMsgUp.textContent = 'Invalid email, try again. ';
    return;
  }

  if (!validatePassword(password)) {
    errorMsgUp.textContent = 'Password must be 8 characters';
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
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(error => {
      console.error('Registration error:', error);
      console.error(error.stack);

      // Display the error message to the user
      errorMsgUp.textContent = 'Registration failed, please try again.';
    });
}

// Add event listeners to the sign up and sign in forms
signUpForm.addEventListener('submit', signUp);
signInForm.addEventListener('submit', signIn);
