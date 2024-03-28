function filterPokemon() {
  let id = document.getElementById('id').value;
  let name = document.getElementById('name').value;
  let type = document.getElementById('type').value;

  fetch('pokemon.json')
  .then(response => response.json())
  .then(data => {
    let results = data.filter(pokemon => 
      (!id || pokemon.id.toString() === id) && 
      (!name || pokemon.name.french === name) && 
      (!type || pokemon.type.includes(type)) 
    );

    document.getElementById('results').innerHTML = '';
    results.forEach(pokemon => {
      let p = document.createElement('p');
      p.textContent = 'ID: ' + pokemon.id + ', Name: ' + pokemon.name.french + ', Type: ' + pokemon.type.join(', ');
      document.getElementById('results').appendChild(p);
    });
  })
  .catch(error => console.error('Erreur : ' + error));
}
