// window.alert("minha primeira mensagem")

// window.confirm("hoje e sexta?")

//cpmentario em linha

/* 
comentando varias linhas

*/

// let nome = window.prompt("qual e o seu nome?")

// window.alert("bem vindo" + nome )

// console.log("apresenta mensagem na tela")


// let numero01 = parseInt(prompt("digite o primeiro numero: ")) 


// let numero02 = parseInt(prompt("digite o segundo numero: "))


// let soma = numero01 + numero02

// console.log(soma)

// let num01 = parseFloat(prompt("digite algum numero:"))

// let num02 = parseFloat(prompt("digite algum numero"))

// let resultado = num01 + num02

// console. log(resultado)

// let idade = parseInt(prompt("qual e sua idade?"))

// if (idade >=18) {
//     console. log("voce e maior de idade, da-lheeee")

// }
// else{
//     console. log("voce e menor de idade, baixinho")
// }

let estacoes = prompt("digite uma estacao do ano: ")

switch (estacoes) {
    case "verao":
        console.log("muito calor e praia")
        break;

    case "outono":
        console.log(" as folhas caem no final")
        break;

    case "inverno":
        console.log("esta muito frio")
        break

    case "primavera":
        console.log("eu vejo flores em voce...")

        break;

    default:
        console. log("nao existe essa estacao!!!")
        break;
}