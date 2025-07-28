let numerosSorteados = [];
let limiteDeNumeros = 10; 
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1; 

function exibirTexto(tag, texto){
  let campo = document.querySelector(tag); 
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2});
}

function exibirMensagemInicial(){
  exibirTexto('h1', 'Game do número secreto');
  exibirTexto('p', 'Digite um número entre 1 e 10: '); 
}

exibirMensagemInicial();

function verificarChute(){

  let chute = document.querySelector('input').value; 
  console.log(chute == numeroSecreto); 

  let palavraTentativa = (tentativas > 1) ? 'tentativas' : 'tentativa'; 
  console.log(numeroSecreto); 

  if (chute == numeroSecreto){
    exibirTexto('h1', 'Acertou!');
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTexto('p', mensagemTentativas); 
    document.getElementById('reiniciar').removeAttribute('disabled'); 
  }else{
    if (chute > numeroSecreto){
      exibirTexto('p', 'O seu chute foi maior que o número secreto, tente novamente');
    }else{
      exibirTexto('p', 'O seu chute foi menor que número secreto, tente novamente');
    }
    tentativas++;
    limparCampo();
  }
}

function botaoReiniciar(){
  numeroSecreto = geraNumeroAleatorio(); 
  limparCampo();
  reiniciarNumeroTentativas();
  exibirMensagemInicial(); 
  document.getElementById('reiniciar').setAttribute('disabled', true);
  console.log('clicado'); 
}

function geraNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);
  let quantidadeDeElementos = numerosSorteados.length; 

  if (quantidadeDeElementos == limiteDeNumeros){
    numerosSorteados = [];
  }

  if (numerosSorteados.includes(numeroEscolhido)){
    return geraNumeroAleatorio();
  }else{
    numerosSorteados.push(numeroEscolhido); 
    console.log(numerosSorteados); 
    return numeroEscolhido; 
  }
}

function limparCampo(){
  let chute = document.querySelector('input');
  chute.value = ''; 
}

function reiniciarNumeroTentativas(){
  return tentativas = 1; 
}