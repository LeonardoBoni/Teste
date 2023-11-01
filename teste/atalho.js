
function home(){
    document.location.href = "home.html"
}

function pagcadastro(){
    document.location.href = "cadastro.html"
}


function pagrelogio(){
    document.location.href = "relogio.html"
   
}

function velha(){
    document.location.href = "velha.html"   
}


const botao1 = document.getElementById('botao-velha1');
const botao2 = document.getElementById('botao-velha2');
const botao3 = document.getElementById('botao-velha3');
const botao4 = document.getElementById('botao-velha4');
const botao5 = document.getElementById('botao-velha5');
const botao6 = document.getElementById('botao-velha6');
const botao7 = document.getElementById('botao-velha7');
const botao8 = document.getElementById('botao-velha8');
const botao9 = document.getElementById('botao-velha9');
const res = document.getElementById('res');

let resultado = "";
let jogadas = 0;
var posicao1 = 0;
var posicao2 = 0;
var posicao3 = 0;
var posicao4 = 0;
var posicao5 = 0;
var posicao6 = 0;
var posicao7 = 0;
var posicao8 = 0;
var posicao9 = 0;


function posicaovelha1() {
    if (jogadas % 2 === 0) {
        botao1.style.backgroundColor = 'green';
        posicao1 = 1;
        console.log(jogadas);
    } else {
        botao1.style.backgroundColor = 'red';
        posicao1 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}




function posicaovelha2() {
    if (jogadas % 2 === 0) {
        botao2.style.backgroundColor = 'green';
        posicao2 = 1;
        console.log(jogadas);
    } else {
        botao2.style.backgroundColor = 'red';
        posicao2 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}


function posicaovelha3() {
    if (jogadas % 2 === 0) {
        botao3.style.backgroundColor = 'green';
        posicao3 = 1;
        console.log(jogadas);
    } else {
        botao3.style.backgroundColor = 'red';
        posicao4 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}


function posicaovelha4() {
    if (jogadas % 2 === 0) {
        botao4.style.backgroundColor = 'green';
        posicao4 = 1;
        console.log(jogadas);
    } else {
        botao4.style.backgroundColor = 'red';
        posicao4 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}



function posicaovelha5() {
    if (jogadas % 2 === 0) {
        botao5.style.backgroundColor = 'green';
        posicao5 = 1;
        console.log(jogadas);
    } else {
        botao5.style.backgroundColor = 'red';
        posicao5 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}



function posicaovelha6() {
    if (jogadas % 2 === 0) {
        botao6.style.backgroundColor = 'green';
        posicao6 = 1;
        console.log(jogadas);
    } else {
        botao6.style.backgroundColor = 'red';
        posicao6 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}



function posicaovelha7() {
    if (jogadas % 2 === 0) {
        botao7.style.backgroundColor = 'green';
        posicao7 = 1;
        console.log(jogadas);
    } else {
        botao7.style.backgroundColor = 'red';
        posicao7 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}



function posicaovelha8() {
    if (jogadas % 2 === 0) {
        botao8.style.backgroundColor = 'green';
        posicao8 = 1;
        console.log(jogadas);
    } else {
        botao8.style.backgroundColor = 'red';
        posicao8 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}


function posicaovelha9() {
    if (jogadas % 2 === 0) {
        botao9.style.backgroundColor = 'green';
        posicao9 = 1;
        console.log(jogadas);
    } else {
        botao9.style.backgroundColor = 'red';
        posicao9 = 2;
        console.log(jogadas);
    }
    jogadas = jogadas + 1;
    verificarVencedor();
}




function verificarVencedor() {
    const possibilidadesVitoria = [
        [posicao1, posicao2, posicao3],
        [posicao4, posicao5, posicao6],
        [posicao7, posicao8, posicao9],
        [posicao1, posicao4, posicao7],
        [posicao2, posicao5, posicao8],
        [posicao3, posicao6, posicao9],
        [posicao1, posicao5, posicao9],
        [posicao3, posicao5, posicao7]
    ];

    for (const possibilidade of possibilidadesVitoria) {
        if (possibilidade.every(posicao => posicao === 1)) {
            resultado = "verde";
            res.innerHTML = "O jogador verde ganhou!";
            res.style.color = 'green'
            fimDoJogo();
            return true;
        } else if (possibilidade.every(posicao => posicao === 2)) {
            resultado = "vermelho";
            res.innerHTML = "O jogador vermelho ganhou!";
            res.style.color = 'red'
            fimDoJogo();
            return true;
        }
    }

    if (jogadas === 9) {
        resultado = "empate";
        res.innerHTML = "O jogo terminou em empate!";
        fimDoJogo();
        return true;
    }
    return false;
}


function resetarJogo() {
    jogadas = 0;
    posicao1 = 0;
    posicao2 = 0;
    posicao3 = 0;
    posicao4 = 0;
    posicao5 = 0;
    posicao6 = 0;
    posicao7 = 0;
    posicao8 = 0;
    posicao9 = 0;
    resultado = "";
    res.innerHTML = "";
    botao1.style.backgroundColor = '';
    botao2.style.backgroundColor = '';
    botao3.style.backgroundColor = '';
    botao4.style.backgroundColor = '';
    botao5.style.backgroundColor = '';
    botao6.style.backgroundColor = '';
    botao7.style.backgroundColor = '';
    botao8.style.backgroundColor = '';
    botao9.style.backgroundColor = '';
}


function aguardarReset() {
    setTimeout(resetarJogo, 15000); 
}


function fimDoJogo() {
    aguardarReset();
}

function verificar(){
    const nome = window.document.getElementById('nome').value
    const idade = window.document.getElementById('idade')
    const email = window.document.getElementById('email')
    const res = window.document.getElementById('res')

    if(nome == Number(nome) || nome === "" || idade.value.length == 0 || idade.value.length < 0 || idade.value.length > 100 || email.value === "" || email.checkValidity() == false){
        res.style.backgroundColor = "black";
        res.style.color = "white"
        res.style.textAlign = "center";
        res.style.fontSize = "30px";
        res.style.width = "auto";
        res.style.height = "50px";
        res.innerHTML = "Revise seus dados e tente novamente!"
    }

    else {
        res.style.backgroundColor = "black";
        res.style.color = "white"
        res.style.textAlign = "center";
        res.style.fontSize = "30px";
        res.style.width = "auto";
        res.style.height = "50px";
        res.innerHTML = `Olá ${nome} , seu cadastro está correto!`
    }
}


function mostrarHora() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    const horaFormatada = `${hora}:${minutos}:${segundos}`;
    const mostrarHora = document.getElementById('hora');
    mostrarHora.innerHTML = `${horaFormatada}`;
    mostrarHora.style.fontSize = '30px'
}

mostrarHora();
setInterval(mostrarHora, 1000);
