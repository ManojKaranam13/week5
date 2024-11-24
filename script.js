document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    clearErrors();

    // Validate the inputs
    let isValid = true;

    // Validate Username: 5-12 characters (alphanumeric)
    const username = document.getElementById('username').value;
    const usernameRegex = /^[a-zA-Z0-9]{5,12}$/;
    if (!usernameRegex.test(username)) {
        isValid = false;
        document.getElementById('usernameError').textContent = 'Username must be 5-12 characters long.';
    }

    // Validate Email: basic email format
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    // Validate Password: at least 8 characters, 1 number and 1 letter
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, include at least 1 number and 1 letter.';
    }

    // If valid, proceed
    if (isValid) {
        alert('Form submitted successfully!');
    }
});

function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
}
