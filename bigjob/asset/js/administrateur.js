document.addEventListener('DOMContentLoaded', function() {
    function getUsersFromLocalStorage() { // LocalStorage correspond au cache
        const usersJSON = localStorage.getItem('users');
        return usersJSON ? JSON.parse(usersJSON) : [];
    }

    function saveUsersToLocalStorage(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    function displayUsers() {
        const usersTableBody = document.getElementById('users-table-body');
        usersTableBody.innerHTML = ''; 

        getUsersFromLocalStorage().forEach(function(user) {
            const userRow = document.createElement('tr');
            userRow.innerHTML = `
                <td>${user.username}</td>
                <td>${user.role}</td>
                <td>
                    <button type="button" class="btn btn-danger btn-sm delete-user">Supprimer</button>
                </td>
            `;
            usersTableBody.appendChild(userRow);
        });
    }

    function addUser(event) {
        event.preventDefault(); 
        
        const username = document.getElementById('username').value;
        const role = document.getElementById('role').value;

        const newUser = { username, role };
        
        const users = getUsersFromLocalStorage();
        users.push(newUser);
        saveUsersToLocalStorage(users); 
        displayUsers(); 

        document.getElementById('username').value = '';
        document.getElementById('role').value = 'moderateur'; 
    }

    document.getElementById('add-user-form').addEventListener('submit', addUser);

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-user')) {
            const indexToRemove = Array.from(event.target.closest('tr').parentNode.children).indexOf(event.target.closest('tr'));
            const users = getUsersFromLocalStorage();
            users.splice(indexToRemove, 1); 
            saveUsersToLocalStorage(users); 
            displayUsers(); 
        }
    });

    displayUsers();
});

