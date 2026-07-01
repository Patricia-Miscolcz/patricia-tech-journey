const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    try {
        await auth.signInWithEmailAndPassword(email, senha);
        alert("Login realizado com sucesso!");
        window.location.href = "pages/dashboard.html";
    } catch (error) {
        alert("Erro no login. Verifique e-mail e senha.");
    }
});