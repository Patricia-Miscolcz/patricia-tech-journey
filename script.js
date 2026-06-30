// Arquivo principal da aplicação LoginCloud
// Captura o formulário de login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log("E-mail:", email);
    console.log("Senha:", senha);
});