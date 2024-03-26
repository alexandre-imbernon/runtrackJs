const textarea = document.querySelector("#keylogger");
function logKey(event) {
  const key = event.key.toLowerCase();
  if (key >= 'a' && key <= 'z') {
    if (document.activeElement === textarea) {
      textarea.value += key + key;
    } else {
      textarea.value += key;
    }
  }
}

document.addEventListener("keydown", logKey);