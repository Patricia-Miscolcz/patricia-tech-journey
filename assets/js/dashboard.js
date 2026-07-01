// Busca os dados do Firestore
async function carregarPerfil() {
    try {

        const documento = await db.collection("usuarios").doc("patricia").get();

        if (documento.exists) {

            const dados = documento.data();

            document.getElementById("nome").textContent = dados.nome;
            document.getElementById("profissao").textContent = dados.profissao;
            document.getElementById("descricao").textContent = dados.descricao;
            document.getElementById("frase").textContent = dados.frase;

        }

    } catch (erro) {

        console.error("Erro ao carregar perfil:", erro);

    }
}

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async function () {
    await auth.signOut();
    window.location.href = "../index.html";
});

// Carrega o perfil quando abrir o dashboard
carregarPerfil();