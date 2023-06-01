document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
  
    if (response.ok) {
      // If login is successful, redirect to the home page
      window.location.href = '/home';
    } else {
      const { errorMessage } = await response.json();
      const errorMessageElement = document.getElementById('error-message');
      errorMessageElement.textContent = errorMessage;
    }
  });
  