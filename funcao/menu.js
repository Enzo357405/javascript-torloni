//1
function conferirsequencia() {
    alert("escreva 3 numeros aleatorios")

    let n1 = parseInt(prompt("digite o primeiro numero"))
    let n2 = parseInt(prompt("digite o segundo numero"))
    let n3 = parseInt(prompt("digite o terceiro numero"))

    if (n1 < n2 && n2 < n3) {
        alert("esta em ordem crescente");
    }
    if (n1 > n2 && n2 > n3) {
        alert("Esta em ordem decrescente")
    }
    else {
        alert("Esta em ordem aleatoria")
    }

}

//2
function descontonacompra() {
    let valorCompra = Number(prompt("Digite o valor total da compra: "));

    let desconto = 0;

    if (valorCompra <= 100) {
        desconto = 0;
    } else if (valorCompra <= 200) {
        desconto = valorCompra * 0.10;
    } else {
        desconto = valorCompra * 0.20;
    }

    let valorFinal = valorCompra - desconto;

    alert("Valor da compra: R$ " + valorCompra.toFixed(2) +
        "\nDesconto aplicado: R$ " + desconto.toFixed(2) +
        "\nValor final a pagar: R$ " + valorFinal.toFixed(2));
}

//3
function conferirnumerospares() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            //par
            console.log(i)

        }
    }

    for (let i = 2; i <= 10; i = i + 2) {
        console.log(i);

    }
}

//4
function somarsequenciadenumeros() {
    let numero = 1;
    let soma = 0;


    while (numero <= 100) {
        soma = soma + numero;
        numero++;
    }

    alert("a soma dos numeros de 1 a 100 e: " + soma);
}

//5
function verificarnumerodigitado() {
    let numeroescolhido = prompt("digite um numero: ");

    while (numeroescolhido != 0) {
        numeroescolhido = prompt("por favor, digite novamente um numero: ")
    }
}