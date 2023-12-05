let tentativas = 1;
const numeroMaximo = 1000;
let quantidadeJogos = 1;
let vitorias = 0;
let totalTentativas = 0;
let numSecreto;
//let palavraVitoria= vitorias == 1? 'vitória' : 'vitórias';
gerarNumAleatorio()
imprimirNumSecreto()

//funções
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumAleatorio(){
    return numSecreto = parseInt(Math.random()*numeroMaximo+1);
}

function saudacao(){
    alert('Oi, tudo bem?');
}

function frases(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function dobro(numero){
    let resultado = numero*2;
    console.log(resultado);
}

frases('title', 'Aba do jogo');
frases('n', `${numeroMaximo}`);
//frases ('h1', 'Adivinhe o número.');
//frases('container__texto-azul', 'SECRETO');
frases ('p', `Escolha um número de 1 a ${numeroMaximo}.`);
frases ('h2', `Este é seu jogo de número ${quantidadeJogos}.`)
frases ('h3', `Você tem 0 vitórias.`)
//frases ('button', 'Butão'); muda apenas o texto do primeiro botão.
//frases ('h4', 'Tentativas: 0.');
//frases ('h5', 'Porcentagem de acerto: 0%.');


function media(numero1, numero2, numero3){
    return ((numero1+numero2+numero3)/3);
}

function imprimirNumSecreto(){
    console.log(numSecreto);
}

function maior(x,y){
    if(x>y){
        return x;
    }else{
        return y;
    }
}

function quadrado(z){
    return (z*z);
}
function novoJogo(){
    gerarNumAleatorio();
    imprimirNumSecreto();
    quantidadeJogos++;
    frases ('h2', `Este é seu jogo de número ${quantidadeJogos}.`);
    limparCampo();
}

function chutar(){
    let palavraTentativa = tentativas <= 1? 'tentativa' : 'tentativas';
    let chute = document.querySelector('input').value;
    if (chute === null || chute === '' || isNaN(chute)){
        alert('Digite um número válido.');
    } else{
        totalTentativas++;
        if (chute == numSecreto){
            alert(`Parabéns, você adivinhou o número secreto ${numSecreto} em ${tentativas} ${palavraTentativa}!`)
            tentativas = 1;
            vitorias++
            let palavraVitoria = vitorias == 1? 'vitória' : 'vitórias';
            frases ('h3', `Você tem ${vitorias} ${palavraVitoria}.`)
        }else{
                if(chute < numSecreto){
                    alert('Errou, tente um número maior.');
                } else{
                    alert('Errou, tente um número mais baixo.');
                }
                tentativas++
                limparCampo();
            }
        
    }
}

function porcentagemAcertos(){
    let porcentagem = ((vitorias/totalTentativas)*100).toFixed(2);
    alert(`Você acertou ${porcentagem}% das tentativas.`)
}


//console desafio
/*dobro(500);
console.log(`O número maior é ${maior(346,5)}.`);
let z = 130;
console.log(`A raiz quadrada de ${z} é ${quadrado(z)}.`);
console.log(` O número médio é ${media(10,11,21)}.`);
*/