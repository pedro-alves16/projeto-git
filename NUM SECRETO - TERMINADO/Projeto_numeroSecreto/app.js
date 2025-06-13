let lista = [];
let limite = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
 exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
       exibirTextoNaTela('p',mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`O número secreto é menor do que ${chute}`);
        } else {
            exibirTextoNaTela('p',`O número secreto é maior do que ${chute}`); 
            
        }
        tentativas++;
        limparCampo();
    }
    
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limite + 1);
   let elementosLista = lista.length;
if (elementosLista == limite){
    lista = [];
}

   if (lista.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else{
    lista.push(numeroEscolhido);
    console.log(lista);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroEscolhido = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
