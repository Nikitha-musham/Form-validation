const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

//  Login Form Submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  let isValid = true;

  // Get the username input value
  const username = usernameInput.value.trim();

  // Validate username
  if (username === '') {
    usernameError.textContent = 'Username is required.';
    isValid = false;
  } else if (username.length < 8) {
    usernameError.textContent = 'Username must be at least 8 characters long.';
    isValid = false;
  } else {
    usernameError.textContent = '';
  }

  // Validate password
  const password = passwordInput.value.trim();
  const specialChars = "@$!%*?&#";
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  // Check password validity
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= 'A' && char <= 'Z') hasUppercase = true;
    else if (char >= 'a' && char <= 'z') hasLowercase = true;
    else if (char >= '0' && char <= '9') hasNumber = true;
    else if (specialChars.includes(char)) hasSpecialChar = true;
  }

  // Password validation conditions
  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    isValid = false;
  } else if (!hasUppercase) {
    passwordError.textContent = 'Password must contain at least one uppercase letter.';
    isValid = false;
  } else if (!hasLowercase) {
    passwordError.textContent = 'Password must contain at least one lowercase letter.';
    isValid = false;
  } else if (!hasNumber) {
    passwordError.textContent = 'Password must contain at least one number.';
    isValid = false;
  } else if (!hasSpecialChar) {
    passwordError.textContent = 'Password must contain at least one special character (@$!%*?&#).';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  // If all validations pass
  if (isValid) {
    alert("'Login successful!' Hi,"+username+",Welcome"); 
    return true;
  }
});





