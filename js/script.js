//Ativar links MENU
const links = document.querySelectorAll(".header-menu a");


function ativarLinks (link) {
  const url = location.href;
  const href = link.href;
  if(url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLinks);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto (parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);


  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);
  pergunta.setAttribute("aria-expanded", ativa);
 }

function eventosPerguntas (pergunta) {
 pergunta.addEventListener("click", ativarPergunta);

}

perguntas.forEach(eventosPerguntas);

// Galeria Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeriaContainer = document.querySelector(".bicicleta-imagem");

function trocarImagem(event) {
  const img = event.target;
  const media = matchMedia("(min-width: 1000px)").matches;
  if(media) {
   galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);
