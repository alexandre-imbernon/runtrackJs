const prenom = document.forms["InscForm"]["prenom"];
const nom = document.forms["InscForm"]["nom"];
const email = document.forms["InscForm"]["email"];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const adresse = document.forms["InscForm"]["adresse"];
const codepost = document.forms["InscForm"]["codepost"];
const password = document.forms["InscForm"]["password"];
const passwordconf = document.forms["InscForm"]["passwordconf"];

function validatePrenom() {
  if (prenom.value.length < 3) {
      document.getElementById('prenomError').textContent = "Votre prénom est trop court";
      prenom.focus();
      return false;
  }
  document.getElementById('prenomError').textContent = '';
  return true;
}

function validateNom() {
  if (nom.value.length < 3) {
      document.getElementById('nomError').textContent = "Votre nom est trop court";
      nom.focus();
      return false;
  }
  document.getElementById('nomError').textContent = '';
  return true;
}

function validateEmail() {
  if (!emailRegex.test(email.value)) {
      document.getElementById('emailError').textContent = "Le format de votre email est incorrect";
      email.focus();
      return false;
  }
  document.getElementById('emailError').textContent = '';
  return true;
}

function validateAdresse() {
  if (adresse.value.length < 10 || !/\d/.test(adresse.value)) {
      document.getElementById('adresseError').textContent = "Votre adresse doit comporter au moins un chiffre et 10 caractères";
      adresse.focus();
      return false;
  }
  document.getElementById('adresseError').textContent = '';
  return true;
}

function validateCodepost() {
  if (codepost.value.length < 5) {
      document.getElementById('codepostError').textContent = "Votre code postal doit comporter 5 chiffres";
      codepost.focus();
      return false;
  }
  document.getElementById('codepostError').textContent = '';
  return true;
}

function validatePassword() {
  if (password.value.length < 8 || !/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value) || !/[0-9]/.test(password.value) || !/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
      document.getElementById('passwordError').textContent = "Votre mot de passe doit comporter au moins 8 caractères (une majuscule, une minuscule, un chiffre et un caractère spécial)";
      password.focus();
      return false;
  } 
  document.getElementById('passwordError').textContent = '';
  return true;
}

function validatePasswordconf() {
  if (password.value != passwordconf.value) {
    document.getElementById('passwordconfError').textContent = "Les mots de passe ne correspondent pas";
    passwordconf.focus();
    return false;
} 
  document.getElementById('passwordconfError').textContent = '';
  return true;
}

function redirect(location) {
    window.location.href = location; 
}
async function inscription() {
  if (!validatePrenom() || !validateNom() || !validateEmail() || !validateAdresse() || !validateCodepost() || !validatePassword() || !validatePasswordconf()) {
      return false;
  }
    if (prenom.value.length < 3) {
        document.getElementById('prenomError').textContent = "Votre prénom est trop court";
        prenom.focus();
        return false;
    }
    if (nom.value == "") {
        nom.focus();
        return false;
    }
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = "Votre email est incorrect";
        email.focus();
        return false;
    }
    if (password.value == "") {
        password.focus();
        return false;
    }
    if (password.value != passwordconf.value) {
        passwordconf.focus();
        return false;
    }

    redirect('connexion.html')
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('successMessage').textContent = 'Vous êtes connecté';
    return true;
}