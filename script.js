// ==========================================
// BUSCA DE RESÍDUOS - ECOFY
// ==========================================

// Pegamos o botão, o campo de pesquisa e a área de resultado do HTML
const botaoBuscar = document.getElementById("btnBuscarResiduo");
const campoResiduo = document.getElementById("residuoBusca");
const resultadoBusca = document.getElementById("resultadoBusca");



// Quando o usuário clicar no botão Buscar
botaoBuscar.addEventListener("click", function () {

    // Pegamos o que foi digitado pelo usuário
    // Também transformamos em letras minúsculas e retiramos espaços extras
    const residuo = campoResiduo.value.toLowerCase().trim();
// Verifica se o campo de pesquisa está vazio
if (residuo === "") {

    resultadoBusca.innerHTML = `
        <h3>🔎 Digite um resíduo</h3>

        <p>
            Escreva o nome do resíduo que você deseja descartar.
        </p>

        <p>
            Exemplos: pilha, vidro, papel, plástico ou óleo de cozinha.
        </p>
    `;

    // Para a busca aqui, pois não há nada para pesquisar
    return;
}
    // Por enquanto, o Ecofy reconhece apenas pilha ou pilhas
    if (residuo === "pilha" || residuo === "pilhas") {

        // Mostra a orientação dentro da própria página
        resultadoBusca.innerHTML = `
            <h3>♻️ Pilhas</h3>

            <p>
                <strong>Não descarte no lixo comum.</strong>
            </p>

            <p>
                Leve as pilhas usadas a um ponto de coleta específico
                para pilhas e baterias.
            </p>
        `;

    } else if (residuo === "vidro" || residuo === "vidros") {

    resultadoBusca.innerHTML = `
        <h3>♻️ Vidro</h3>

        <p>
            <strong>Separe o vidro dos demais resíduos.</strong>
        </p>

        <p>
            Embalagens de vidro recicláveis devem ser encaminhadas
            para a coleta seletiva ou para um ponto de coleta que
            receba esse material.
        </p>

        <p>
            ⚠️ Se estiver quebrado, tenha cuidado ao manusear e
            acondicione o material de forma segura para evitar cortes.
        </p>
    `;

} else if (
    residuo === "papel" ||
    residuo === "papeis" ||
    residuo === "papéis"
) {

    resultadoBusca.innerHTML = `
        <h3>♻️ Papel</h3>

        <p>
            <strong>Separe o papel dos demais resíduos.</strong>
        </p>

        <p>
            Papéis recicláveis devem ser encaminhados para a
            coleta seletiva ou para um ponto de coleta que
            receba esse tipo de material.
        </p>

        <p>
            ⚠️ Papéis muito sujos, engordurados ou contaminados
            podem não ser adequados para reciclagem.
        </p>
    `;

} else if (
    residuo === "óleo" ||
    residuo === "oleo" ||
    residuo === "óleo de cozinha" ||
    residuo === "oleo de cozinha"
) {

    resultadoBusca.innerHTML = `
        <h3>♻️ Óleo de cozinha usado</h3>

        <p>
            <strong>Não despeje o óleo usado na pia, no vaso sanitário
            ou diretamente no meio ambiente.</strong>
        </p>

        <p>
            Depois que o óleo esfriar, coloque-o em uma garrafa
            plástica bem fechada e leve a um ponto de coleta que
            receba óleo de cozinha usado.
        </p>

        <p>
            🌱 O óleo coletado pode ser encaminhado para processos
            de reaproveitamento e reciclagem.
        </p>
    `;

} else if (
    residuo === "plástico" ||
    residuo === "plastico" ||
    residuo === "plásticos" ||
    residuo === "plasticos"
) {

    resultadoBusca.innerHTML = `
        <h3>♻️ Plástico</h3>

        <p>
            <strong>Separe os plásticos recicláveis dos demais resíduos.</strong>
        </p>

        <p>
            Quando possível, retire restos de alimentos ou outros
            resíduos da embalagem antes de encaminhá-la para a
            coleta seletiva.
        </p>

        <p>
            Leve o material para a coleta seletiva ou para um ponto
            de coleta que receba plásticos.
        </p>
    `;

} else if (
    residuo === "eletrônico" ||
    residuo === "eletronico" ||
    residuo === "eletrônicos" ||
    residuo === "eletronicos" ||
    residuo === "lixo eletrônico" ||
    residuo === "lixo eletronico"
) {

    resultadoBusca.innerHTML = `
        <h3>♻️ Lixo eletrônico</h3>

        <p>
            <strong>Não descarte equipamentos eletrônicos no lixo comum.</strong>
        </p>

        <p>
            Celulares, computadores, carregadores, cabos e outros
            equipamentos eletrônicos devem ser encaminhados para
            pontos de coleta que recebam resíduos eletrônicos.
        </p>

        <p>
            🔋 Se o aparelho possuir bateria, procure também seguir
            as orientações específicas para esse tipo de componente.
        </p>
    `;

} else if (
    residuo === "bateria" ||
    residuo === "baterias"
) {

    resultadoBusca.innerHTML = `
        <h3>🔋 Baterias</h3>

        <p>
            <strong>Não descarte baterias no lixo comum.</strong>
        </p>

        <p>
            Guarde a bateria usada em local seguro e encaminhe-a
            para um ponto de coleta que receba pilhas e baterias.
        </p>

        <p>
            ♻️ Esses resíduos precisam de destinação adequada
            e não devem ser misturados ao lixo doméstico comum.
        </p>
    `;

} else if (
    residuo === "metal" ||
    residuo === "metais" ||
    residuo === "lata" ||
    residuo === "latas"
) {

    resultadoBusca.innerHTML = `
        <h3>♻️ Metal</h3>

        <p>
            <strong>Separe os metais recicláveis dos demais resíduos.</strong>
        </p>

        <p>
            Latas e outras embalagens metálicas recicláveis podem ser
            encaminhadas para a coleta seletiva ou para um ponto de
            coleta que receba esse material.
        </p>

        <p>
            ⚠️ Se o objeto tiver partes cortantes ou pontiagudas,
            acondicione-o com cuidado para evitar acidentes durante
            o manuseio.
        </p>
    `;

} else {

        // Esta mensagem aparece quando o resíduo ainda não está cadastrado
        resultadoBusca.innerHTML = `
            <h3>🔎 Resíduo não encontrado</h3>

            <p>
                Ainda não encontramos esse resíduo na base do Ecofy.
            </p>
        `;

    }

});
// ==========================================
// PERMITE PESQUISAR APERTANDO ENTER
// ==========================================

campoResiduo.addEventListener("keydown", function (evento) {

    // Verifica se a tecla pressionada foi Enter
    if (evento.key === "Enter") {

        // Simula um clique no botão Buscar
        botaoBuscar.click();
    }

});

// ==========================================
// LIMPA O RESULTADO AO DIGITAR NOVA PESQUISA
// ==========================================

campoResiduo.addEventListener("input", function () {

    // Apaga o resultado anterior quando o usuário começa a digitar novamente
    resultadoBusca.innerHTML = "";

});