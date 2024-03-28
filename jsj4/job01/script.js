document.getElementById('button').addEventListener('click', function() {
  fetch('expression.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('expression').textContent = data;
  })
  .catch(error => console.error('Une erreur est survenue lors de la lecture du fichier : ' + error));
});
