// script.js

// Check if users data exists in localStorage; if not, initialize an empty array
let usersArray = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload on form submission
    
    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Create a user object
    const user = { name, email };
    
    // Push the user data to the array
    usersArray.push(user);

    // Save the updated array to localStorage
    localStorage.setItem('users', JSON.stringify(usersArray));

    // Simulate AJAX POST request (no actual server)
    simulateAJAXPost(user);

    // Redirect to the page that displays the users
    window.location.href = 'dataDisplay.html';
});

// Simulate an AJAX POST request with a delay
function simulateAJAXPost(user) {
    setTimeout(() => {
        console.log('Simulating POST request:', user);
    }, 1000); // 1 second delay
}
