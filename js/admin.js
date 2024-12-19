const adminForm = document.getElementById('adminLoginForm');
const adminInput = document.getElementById('adminUsername');
const adminPass = document.getElementById('adminPassword');
const adminError = document.getElementById('adminUsernameError');
const passError = document.getElementById('adminPasswordError');

// Admin Login Form Submission
adminForm.addEventListener('submit', (e) => {
 e.preventDefault(); // Prevent form submission
 let isAdminValid = true;

 // Validate admin username
 if (adminInput.value.trim() !== 'admin') {
   adminError.textContent = 'Username is incorrect';
   isAdminValid = false;
 } else {
   adminError.textContent = '';
 }

 // Validate admin password
 if (adminPass.value.trim() !== 'root') {
   passError.textContent = 'Incorrect password';
   isAdminValid = false;
 } else {
   passError.textContent = '';
 }

 // If validations pass
 if (isAdminValid) {
   alert("Login Successful! Welcome, Admin!");
 }
});