let laplateforme;

fetch('value.json')
.then(response => response.json())
.then(data => {
  laplateforme = data; 
  jsonValueKey(); 
})
.catch(error => console.error('Erreur : ' + error));

function jsonValueKey(){
  if (laplateforme) { 
    console.log(laplateforme.city);
  } else {
    console.log('laplateforme n\'est pas encore défini');
  }
}