// passo 1 -  pegando o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

// passo 2 -  identificando o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // passo 3 - desmarcando o botão selecionado anterior
    desativarBotaoSelecionado();

    // passo 4 - marcando o botão clicado como se estivesse selecionado
    selecionarBotaoCarrosel(botao);

    // passo 5 - escondendo a imagem ativa de fundo
    esconderImagemAtiva();

    // passo 6 - fazendo aparecer a imagem de fundo correspondente ao botão clicado
    mostrarImagemDeFundo(indice);
  });
});

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function selecionarBotaoCarrosel(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
