// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Simple validation (for demonstration purposes)
    if (username === 'user' && password === 'password') {
        messageDiv.innerHTML = `<p style="color: green;">Welcome, ${username}!</p>`;
        document.getElementById('logoutButton').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none'; // Hide login form
    } else {
        messageDiv.innerHTML = `<p style="color: red;">Invalid username or password.</p>`;
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('message').innerHTML = '';
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block'; // Show login form again
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});