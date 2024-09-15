// script.js
let users = []; // Array to store user data

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Check if user exists and password matches
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        messageDiv.innerHTML = `<p style="color: green;">Welcome, ${username}!</p>`;
        document.getElementById('logoutButton').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none'; // Hide login form
        document.getElementById('toggleFormButton').style.display = 'none'; // Hide switch button
    } else {
        messageDiv.innerHTML = `<p style="color: red;">Invalid username or password.</p>`;
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const messageDiv = document.getElementById('message');

    // Check if username already exists
    const existingUser = users.find(user => user.username === newUsername);
    
    if (existingUser) {
        messageDiv.innerHTML = `<p style="color: red;">Username already exists. Please choose another.</p>`;
    } else {
        // Add new user to the array
        users.push({ username: newUsername, password: newPassword });
        messageDiv.innerHTML = `<p style="color: green;">Sign up successful! You can now log in.</p>`;
        document.getElementById('signupForm').reset(); // Reset signup form
        toggleForms(); // Switch back to login form
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('message').innerHTML = '';
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block'; // Show login form again
    document.getElementById('toggleFormButton').style.display = 'inline'; // Show switch button
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

document.getElementById('toggleFormButton').addEventListener('click', toggleForms);

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const formTitle = document.getElementById('formTitle');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        formTitle.innerText = 'Login Form';
        document.getElementById('toggleFormButton').innerText = 'Switch to Sign Up';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        formTitle.innerText = 'Sign Up Form';
        document.getElementById('toggleFormButton').innerText = 'Switch to Login';
    }
}