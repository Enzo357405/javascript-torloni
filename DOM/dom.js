//DOM e a arvore/fluxo do meu documento HTML
// ele serve para que o JS consiga manipular (visualizar, editar, criar e excluir)
// o dom ele torna os elementos HTML em objetos para que o JS consiga acessar de fato 

 let elementobody = document.getElementsByTagName("body");

 console.log(elementobody);

 //acessar pela tag h1

 let elementh1 = document.getElementsByTagName("h1");

//acessando o elemento pela sua posicao 
 elementh1[0].textContent = "Fernanda";





 //exibe o id tecnica

 //exibe os elementos que possuem a class jogador

 //exibe o item 4 dos elementos que possuem a class jogador 

 //muda o texto do conteudo dpo item da 3 posicao dos elementos que possuem a class jogador 

/// 1

 let tecnica = document.getElementById("tecnica");

console.log(tecnica)

/// 2 
let jogador = document.getElementsByClassName("jogador");

console.log(jogador)

/// 3
console.log(jogador[3]);

// 4
 jogador[3].textContent = "macarrao"

 //mudar a estilizacao de um elemento

  tecnica.style.color = "red";
  tecnica.style.fontSize = "20px"

  // mude a cor da fonte do item da 3 posicoa dos elementos que possuem a class jogador
  jogador[3].style.color = "blue";





 