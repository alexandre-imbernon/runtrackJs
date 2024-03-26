let count = 0;
const button = document.querySelector("#button");
const compteur = document.querySelector("#compteur");

function addOne() {
  count++;
  compteur.innerHTML = ` ${count}`;
}

button.addEventListener("click", addOne);