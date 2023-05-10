const form = document.querySelector("#form")
const firstNameInput = document.querySelector("#first-name")
const lastNameInput = document.querySelector("#last-name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const frontEndInput = document.querySelector("#front-end")
const backEndInput = document.querySelector("#back-end")
const fullstaclInput = document.querySelector("#fulstack")
const jobSituation = document.querySelector("#job")
const seniorityInput = document.querySelector("#seniority")
const htmlInput = document.querySelector("#html")
const cssInput = document.querySelector("#css")
const javascriptInput = document.querySelector("#javascript")
const phpInput = document.querySelector("#php")
const csharpInput = document.querySelector("#csharp")
const pythonInput = document.querySelector("#python")
const javaInput = document.querySelector("#java")
const experienceInput = document.querySelector("#experience")
const erroLabel = document.querySelector("#erro")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Verifica se o primeiro nome está vazio
  if(firstNameInput.value === "") {
    erroMessage(erroLabel, "Por favor, preencha o seu nome!");
    erroLabel.scrollIntoView();
    return;
  }

  // Verifica se o sobrenome está vazio
  if(lastNameInput.value === "") {
    erroMessage(erroLabel, "Por favor, preencha o seu sobrenome!");
    erroLabel.scrollIntoView();
    return;
  }

  // Verifica se o e-mail está preenchido e se é válido 
  if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
    erroMessage(erroLabel, "Por favor, preencha o seu Email corretamente!");
    erroLabel.scrollIntoView();
    return;
  }

  // Verifica se a senha é válida
  if(!(passwordInput.value.length >= 8)) {
    erroMessage(erroLabel, "Por favor, preencha a sua senha com no mínimo 8 caracteres");
    erroLabel.scrollIntoView();
    return;
  }

  // Verifica se a situaçao de emprego está preenchida
  if(jobSituation.value === "") {
    erroMessage(erroLabel, "Por favor, preencha sua situação de emprego!");
    erroLabel.scrollIntoView();
    return;
  }

  // Verifica se a experiência está preenchida
  if(seniorityInput.value === "") {
    erroMessage(erroLabel, "Por favor, preencha sua experiência!");
    erroLabel.scrollIntoView();
    return;
  }

  // Verifica se no mínimo uma das tecnologias está marcada
  if(!(htmlInput.checked || cssInput.checked || javascriptInput.checked || phpInput.checked || csharpInput.checked || pythonInput.checked || javaInput.checked)) {
    erroMessage(erroLabel, "Você precisa saber pelo menos uma tecnologia!")
    erroLabel.scrollIntoView();
    return;
  }

  // Verifica se a mensagem está preenchida
  if(experienceInput.value == "") {
    erroMessage(erroLabel, "Por favor, nos conte sua experiência como desenvolvedor");
    erroLabel.scrollIntoView();
    return;
  }

  // Se todos os campos estiverem preenchidos corretamente o formulário é enviado
  form.submit();
})

// Função que valida e-mail
function isEmailValid(email) {

  // Cria uma regex para validar email
  const emailRegex = new RegExp(
    // usuario123@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
  );

  if(emailRegex.test(email)) {
    return true;
  }

  return false;
}

// Cria a mensagem de erro
function erroMessage(label, text) {
  label.innerHTML = "<p>"+text+"</p>";
}
