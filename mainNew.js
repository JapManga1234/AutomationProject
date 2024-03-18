// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve username and password values from the form
        const username = form.username.value.trim();
        const password = form.password.value.trim();

        // Perform basic validation
        if (username === '' || password === '') {
            alert('Please enter both username and password.');
            return;
        }

        // Simulate login process (replace with actual login functionality)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Here you can redirect the user to another page or perform other actions
        } else {
            alert('Invalid username or password.');
        }
    });
});
