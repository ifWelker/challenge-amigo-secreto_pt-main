//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.

// Criando a Lista Vazia
let amigos = [];

//Criando a Function
function addAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (!amigo) {
    alert("Nome inválido! Favor insirir um nome Válido");
    return;
  }
  amigos.push(amigo);

  const limpaInput = document.getElementById("amigo");
  limpaInput.value = "";

  listaAmigos();

  console.log("amigo adicionado: ", amigo);
  console.log("Lista de amigos: ", amigos);
}

// Função para exibir amigos

function listaAmigos() {
  let elementoLista = document.getElementById("listaAmigos");

  //Limpa a lista de amigos
  elementoLista.innerHTML = "";

  // Adiciona cada amigo na lista de amigos usando for

  for (let posicao = 0; posicao < amigos.length; posicao++) {
    elementoLista.innerHTML += `<li> ${amigos[posicao]} </li>`;
  }
}

// Função para sortear amigo

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos para sortear um amigo secreto");
    return;
  }

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  document.getElementById("resultado").innerHTML = amigoSorteado;
}
