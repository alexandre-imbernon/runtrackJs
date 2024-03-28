function updateTable() {
  fetch('utilisateur.json')
      .then(response => response.json())
      .then(users => {
          const table = document.getElementById('userTable');
          for (let i = 1; i < table.rows.length; i++) {
              const row = table.rows[i];
              for (let j = 1; j < row.cells.length; j++) {
                  const cell = row.cells[j];
                  const user = users[j - 1];
                  if (user) {
                      switch (i) {
                          case 1:
                              cell.textContent = user.id;
                              break;
                          case 2:
                              cell.textContent = user.nom;
                              break;
                          case 3:
                              cell.textContent = user.prénom;
                              break;
                          case 4:
                              cell.textContent = user.email;
                              break;
                      }
                  } else {
                      cell.textContent = '';
                  }
              }
          }
      })
      .catch(error => console.error('Erreur:', error));
}