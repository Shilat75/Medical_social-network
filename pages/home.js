// Get the sign up and sign in forms
const  data = document.getElementById('data_post');
const submit = document.getElementById('submitBtn');

// Function to validate password length
function validatePassword(data) {
  return data.length >= 1;
}


function addPost(event) {
    event.preventDefault();
    console.log('add post');
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
  