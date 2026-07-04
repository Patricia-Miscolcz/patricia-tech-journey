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


            document.getElementById("tituloSobre").textContent = dados.tituloSobre;
            document.getElementById("subtituloSobre").textContent = dados.subtituloSobre;
         
            document.getElementById("missao").textContent = dados.missao;
            document.getElementById("filosofia").textContent = dados.filosofia;

            document.getElementById("trajetoria1Titulo").textContent = dados.trajetoria1Titulo;
            document.getElementById("trajetoria1Texto").textContent = dados.trajetoria1Texto;

            document.getElementById("trajetoria2Titulo").textContent = dados.trajetoria2Titulo;
            document.getElementById("trajetoria2Texto").textContent = dados.trajetoria2Texto;

            document.getElementById("trajetoria3Titulo").textContent = dados.trajetoria3Titulo;
            document.getElementById("trajetoria3Texto").textContent = dados.trajetoria3Texto;

            document.getElementById("trajetoria4Titulo").textContent = dados.trajetoria4Titulo;
            document.getElementById("trajetoria4Texto").textContent = dados.trajetoria4Texto;

            document.getElementById("trajetoria5Titulo").textContent = dados.trajetoria5Titulo;
            document.getElementById("trajetoria5Texto").textContent = dados.trajetoria5Texto;
        }

    } catch (erro) {

        console.error("Erro ao carregar perfil:", erro);

    }
}

async function carregarFormacoes() {
    try {
       
        const snapshot = await db
        .collection("formacoes")
        .orderBy("ano")
        .get();


        const lista = document.getElementById("listaFormacoes");

        lista.innerHTML = "";

        snapshot.forEach((doc) => {
            const dados = doc.data();

            lista.innerHTML += `
                <div class="formacao-card">
                    <img src="../assets/formacoes/${dados.imagem}" alt="${dados.nome}">

                    <div class="formacao-info">
                        <span class="formacao-tipo">🎓 ${dados.tipo}</span>

                        <h3>${dados.nome}</h3>

                        <p>${dados.instituicao}</p>

                        <small>📅 Conclusão: ${dados.ano}</small>

                        <a href="../assets/formacoes/${dados.pdf}" target="_blank" class="btn-formacao">
                            📄 Visualizar Documento
                        </a>
                    </div>
                </div>
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

                        let tagsHTML = "";

            if (dados.tags) {

                dados.tags.forEach((tag) => {

                    tagsHTML += `<span class="tag-tech">${tag}</span>`;

                });

            }

            lista.innerHTML += `
                <div class="tech-card">

                    <div class="tech-icone">
                        ${iconeHTML}
                    </div>

                    <h3>${dados.nome}</h3>

                    <p>${dados.descricao}</p>

                    <div class="tags-tech">
                        ${tagsHTML}
                    </div>

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


async function carregarCertificados() {
    try {
        const snapshot = await db.collection("certificados").get();
        const lista = document.getElementById("listaCertificados");

        lista.innerHTML = "";

        snapshot.forEach((doc) => {
            const dados = doc.data();

            lista.innerHTML += `
                <div class="certificado-card">
                    <img src="../assets/img/certificados/${dados.imagem}" alt="${dados.nome}">

                    <div class="certificado-info">
                        <span class="certificado-tipo">🎓 ${dados.tipo}</span>

                        <h3>${dados.nome}</h3>

                        <p>${dados.instituicao}</p>

                        <small>${dados.categoria} • ${dados.ano}</small>

                        <a href="../assets/certificados/${dados.pdf}" target="_blank" class="btn-certificado">
                            🔍 Visualizar Certificado
                        </a>
                    </div>
                </div>
            `;
        });

    } catch (erro) {
        console.error("Erro ao carregar certificados:", erro);
    }
}


async function carregarBadges() {

    try {

        const snapshot = await db.collection("badges").get();

        const lista = document.getElementById("listaBadges");

        lista.innerHTML = "";

        snapshot.forEach((doc) => {

            const dados = doc.data();

            lista.innerHTML += `
                <div class="badge-card">

                    <img src="../assets/img/badges/${dados.imagem}" alt="${dados.nome}">

                    <h3>${dados.nome}</h3>

                    <p>${dados.instituicao}</p>

                    <small>${dados.categoria}</small>

                    <a href="${dados.link}"
                       target="_blank"
                       class="btn-badge">

                        🏅 Ver Credencial

                    </a>

                </div>
            `;

        });

    } catch (erro) {

        console.error("Erro ao carregar badges:", erro);

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
carregarCertificados();
carregarBadges();