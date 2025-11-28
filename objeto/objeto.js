let mercedes = {
    modelo: "G63",
    ano: 2025,
    fabricante: "mercedes",
    acelerar(){
        console.log("acelerando...vrum...vrum...")
    },
    freiar(){
      console.log("freiando....");
    }
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());

//criar objeto professor tadeu ou jonas
//3 propriedades nome, nif, salario

let professoraalexia = {
    nome: "alexia vitoria m. p.",
    nif: 1111112,
    salario:  9990.90,
    datanasc: new Date (2001, 3, 30),
    hobbies: ["correr", "jogar clash"],

    atribuirnota(){},
    baterponto(){
       let horariobatido = new Date(2025, 10, 28, 17, 5);

       console.log(horariobatido);
    }
};


console.log(professoraalexia.hobbies);
console.log(professoraalexia.datanasc);
console.log(professoraalexia.baterponto());