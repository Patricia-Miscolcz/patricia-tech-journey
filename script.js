const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        console.log("Preencha todos os campos.");
        return;
    }

    console.log("E-mail:", email);
    console.log("Senha:", senha);
});