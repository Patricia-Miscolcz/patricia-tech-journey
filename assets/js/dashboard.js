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
            
            document.getElementById("githubLink").href = dados.github;
            document.getElementById("linkedinLink").href = dados.linkedin;

        }

    } catch (erro) {

        console.error("Erro ao carregar perfil:", erro);

    }
}


async function carregarFormacoes() {

    try {

        const snapshot = await db.collection("formacoes").get();

        const lista = document.getElementById("listaFormacoes");

        lista.innerHTML = "";

        snapshot.forEach((doc) => {

            const dados = doc.data();

            lista.innerHTML += `
                <p>
                    <strong>${dados.instituicao}</strong><br>
                    ${dados.curso}
                </p>
            `;

        });

    } catch (erro) {

        console.error("Erro ao carregar formações:", erro);

    }

}

async function carregarImpactosDisciplinas() {
    try {
        const snapshot = await db.collection("impactosDisciplinas").get();
        const lista = document.getElementById("listaImpactos");

        lista.innerHTML = "";

        snapshot.forEach((doc) => {
            const dados = doc.data();

            lista.innerHTML += `
                <div class="impacto-card">
                    <span>${dados.icone}</span>
                    <h3>${dados.nome}</h3>
                    <p>${dados.descricao}</p>
                    <small><strong>Aplicações:</strong> ${dados.aplicacoes}</small>
                    <small><strong>Importância:</strong> ${dados.importancia}</small>
                </div>
            `;
        });

    } catch (erro) {
        console.error("Erro ao carregar impactos das disciplinas:", erro);
    }
}

async function carregarTecnologias() {
    try {
        const snapshot = await db.collection("tecnologias").get();
        const lista = document.getElementById("listaTecnologias");

        lista.innerHTML = "";

        snapshot.forEach((doc) => {
            const dados = doc.data();

            let iconeHTML = "";

            if (dados.tipo === "fontawesome") {
                iconeHTML = `<i class="${dados.icone}"></i>`;
            } else {
                iconeHTML = `<i class="${dados.icone} colored"></i>`;
            }

            lista.innerHTML += `
                <div class="tech-card">
                    <div class="tech-icone">
                        ${iconeHTML}
                    </div>

                    <h3>${dados.nome}</h3>
                    <p>${dados.descricao}</p>
                    <span>${dados.nivel}</span>
                </div>
            `;
        });

    } catch (erro) {
        console.error("Erro ao carregar tecnologias:", erro);
    }
}


async function carregarEstatisticas() {
    try {
        const formacoes = await db.collection("formacoes").get();
        const tecnologias = await db.collection("tecnologias").get();
        const disciplinas = await db.collection("impactosDisciplinas").get();
        const certificados = await db.collection("certificados").get();

        document.getElementById("totalFormacoes").textContent = formacoes.size;
        document.getElementById("totalTecnologias").textContent = tecnologias.size;
        document.getElementById("totalDisciplinas").textContent = disciplinas.size;
        document.getElementById("totalCertificados").textContent = certificados.size;

    } catch (erro) {
        console.error("Erro ao carregar estatísticas:", erro);
    }
}


const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async function () {
    await auth.signOut();
    window.location.href = "../index.html";
});

// Carrega o perfil quando abrir o dashboard
carregarPerfil();
carregarFormacoes();
carregarImpactosDisciplinas();
carregarTecnologias();
carregarEstatisticas();