var myModal = document.getElementById('exampleModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});

const bladerunnercit = [
  "Wake up, time to die.",
  "Avez-vous déjà désactivé un humain par erreur ?",
  "I’d rather be a killer than a victim.",
  "Tous ces moments se perdront dans l’oubli, comme des larmes dans la pluie.",
  "Quite an experience to live in fear, isn't it? That's what it is to be a slave."
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * bladerunnercit.length);
  return bladerunnercit[randomIndex];
}

document.getElementById("reboot2").addEventListener("click", function(){
  const citationblade = document.getElementById("citationblade");
  const newquote = getRandomQuote();
  citationblade.innerHTML = "<h2 class='text-left mt-4'>BladeRunner Quote: </h2><p>" + newquote + "</p>";
});
