document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      window.location.href = 'main.html';
    } else {
      alert('Invalid username or password!');
    }
  });
  function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleButton.textContent = "Hide";
    } 
    else {
      passwordField.type = "password";
      toggleButton.textContent = "Show";
    }
  }