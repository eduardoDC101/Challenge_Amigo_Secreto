let listaNomes = [];
let i = 0;

const adicionarAmigo = () =>{
    let nome = document.getElementById('amigo');

    if(nome.value === "" || nome.value === " " || typeof nome.value !== 'string'){
        alert("Digite um nome no campo!!!");
    } else{
        listaNomes.push(nome.value);
    }

    document.getElementById('amigo').value = "";

    let listaExibicao = document.getElementById('listaAmigos');
    for(i; i < listaNomes.length; i++){
        listaExibicao.innerHTML += `<li>${listaNomes[i]}</li>`;
    }
    
};

const sortearAmigo = () =>{
    let numeroEscolhido = Math.floor(Math.random() * listaNomes.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    resultado.innerHTML = `<h2>O sorteado foi: ${listaNomes[numeroEscolhido]}</h2>`;
};