alert('Boas-Vindas ao jogo do número secreto');
let numeroMaximo = prompt("Digite o número máximo do jogo");
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto ...
while (chute != numeroSecreto) {
    
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
console.log(numeroSecreto);
    // verifica se o chute é igual ao número secreto
    if (chute == numeroSecreto){
        break;
    } else{
        alert('Que pena, você errou.');
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
//operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns, você acertou! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);





//if (tentativas >1){
//    alert(`Parabéns, você acertou! ${numerosecreto} com ${tentativas} tentativas`);
//} else {
//alert(`Parabéns, você acertou! ${numerosecreto} com ${tentativas} tentativa`);
//}
