alert("escreva 3 numeros aleatorios")

let n1 = parseInt (prompt("digite o primeiro numero"))
let n2 = parseInt (prompt("digite o segundo numero"))
let n3 = parseInt (prompt("digite o terceiro numero"))

if(n1 < n2 && n2 < n3){
    alert("esta em ordem crescente");
}
if(n1 > n2 && n2 > n3){
    alert("Esta em ordem decrescente")
}
else{
    alert("Esta em ordem aleatoria")
}
