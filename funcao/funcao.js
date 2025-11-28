function exibirtabuadaescolhida() {
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

    console.log(`Tabuada do ${numero}:`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

//chama a minha funcao//
// exibirtabuadaescolhida();



function exibirnomesolicitado(){
    let nomesolicitado = prompt("digite seu nome")

    return nomesolicitado;
}

let nome = exibirnomesolicitado();

alert(nome);

function somardoisnumeros(numero1, numero2) {
    console.log(numero1+numero2);
    
}

somardoisnumeros(10, 10);

//crie uma funcao para o exercicio 08 de estrutura condicional//
//passe via parametro o peso e altura.

//1 coisa a se fazer - criar a estrutura da funcao com os seus devidos parametros
//2 coisa a se fazer - copiar o codigo do imc
//3 coisa a se fazer - colar o codigo do imc dentro da funcao 
//4 coisa a se fazer - chamar a funcao e atribuir peso e altura


function calcularimc(peso, altura) {
  

let imc = peso / (altura * altura);

let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = "Sobrepeso";
} else if (imc >= 30.0 && imc <= 34.9) {
    classificacao = "Obesidade grau 1";
} else if (imc >= 35.0 && imc <= 39.9) {
    classificacao = "Obesidade grau 2";
} else {
    classificacao = "Obesidade grau 3";
}

alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);  
}

let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

calcularimc(peso, altura);

