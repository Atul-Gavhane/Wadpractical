// dataDisplay.js

window.onload = function() {
    // Get the users data from localStorage
    const usersArray = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.querySelector('#userTable tbody');

    // If no users are registered, display a message
    if (usersArray.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="2">No users registered yet.</td></tr>';
        return;
    }

    // Loop through users and add them to the table
    usersArray.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;
        tableBody.appendChild(row);
    });
};
