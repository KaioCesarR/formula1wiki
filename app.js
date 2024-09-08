function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = `<p style="color: white;">Nada foi encontrado. Digite algo na barra de pesquisa ou pressione "Grid Atual".</p>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";
    let idade = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        equipe = dado.equipe.toLowerCase()
        tags = dado.tags.toLowerCase()
        nacionalidade = dado.nacionalidade.toLowerCase()
        idade = dado.idade.toLowerCase()
        // se nome/descicao/equipe/tags incluir no campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || equipe.includes(campoPesquisa) || tags.includes(campoPesquisa) || nacionalidade.includes(campoPesquisa) || idade.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado, formatando o HTML com o nome, descrição e link do dado
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.nome}" class="imagem-piloto">
                <h2>${dado.nome}</h2>
                <h3>Idade: ${dado.idade}</h3>
                <h3>País de origem: ${dado.nacionalidade}</h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">Equipe atual: ${dado.equipe}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = `<p style="color: white;">Nada foi encontrado em nossa base de dados.</p>`
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}

function pilotosF1() {
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Precisava de colocar 2 pilotos por coluna pois são 2 pilotos por equipe, então pedi ajuda ao Google Gemini e ele me deu a seguinte solução:

    // Itera sobre os dados, agrupando os pilotos em pares
    for (let i = 0; i < dados.length; i += 2) {
        let piloto1 = dados[i];
        let piloto2 = dados[i + 1];
        
        resultados += `
            <div class="linha-pilotos">
                <div class="item-resultado">
                    <img src="${piloto1.imagem}" alt="${piloto1.nome}" class="imagem-piloto">
                    <h2>${piloto1.nome}</h2>
                    <h3>Idade: ${piloto1.idade}</h3>
                    <h3>País de origem: ${piloto1.nacionalidade}</h3>
                    <p class="descricao-meta">${piloto1.descricao}</p>
                    <p class="descricao-meta">Equipe atual: ${piloto1.equipe}</p>
                    <a href="${piloto1.link}" target="_blank">Saiba mais</a>
                </div>
                ${piloto2 ? `
                    <div class="item-resultado">
                        <img src="${piloto2.imagem}" alt="${piloto2.nome}" class="imagem-piloto">
                        <h2>${piloto2.nome}</h2>
                        <h3>Idade: ${piloto2.idade}</h3>
                        <h3>País de origem: ${piloto2.nacionalidade}</h3>
                        <p class="descricao-meta">${piloto2.descricao}</p>
                        <p class="descricao-meta">Equipe atual: ${piloto2.equipe}</p>
                        <a href="${piloto2.link}" target="_blank">Saiba mais</a>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Insere os resultados na seção
    section.innerHTML = resultados;
}