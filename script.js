const nameForm = document.getElementById("name");
const emailForm = document.getElementById("email");
const subjectForm = document.getElementById("subject");
const messageForm = document.getElementById("message");
const btnSendForm = document.getElementById("sendBtn");
const confirmForm = document.getElementById("confirmMessage");
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errorMessages = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  errorMessages.innerHTML = "";

  if (nameForm.value.length < 3) {
    errorMessages += `Nombre no valido <br>`;
    entrar = true;
  }

  if (!regexEmail.test(email.value)) {
    errorMessages += `El correo no es valido <br>`;
    entrar = true;
  }

  if (subjectForm.value.length < 4) {
    errorMessages += `Invalid Subject <br>`;
    entrar = true;
  }

  if (messageForm.value.length < 3) {
    errorMessages += `Message invalid <br>`;
    entrar = true;
  }

  if (entrar) {
    confirmForm.innerHTML = errorMessages;
  } else {
    confirmForm.innerHTML = "Enviado";
  }
});
