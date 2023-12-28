// Calculadora de partidas Rankeadas

let nivel = ""
let resultado  = rank(101,0)
function rank(vitoria,derrota){
    let score = vitoria - derrota
    return score
}


function nivelR (){
    if (resultado <= 10) { nivel = "Ferro"}
    else if (resultado >= 11 && resultado <=20){nivel = "Bronze"}
    else if (resultado >= 21 && resultado <=50){nivel = "Prata"}
    else if (resultado >= 51 && resultado <=80){nivel = "Ouro "}
    else if (resultado >= 81 && resultado <=90){nivel = "Diamante"}
    else if (resultado >= 91 && resultado <= 100){nivel = "Lendário"}
    else{nivel = "Imortal"}
    return nivel
}

console.log("O Herói tem de saldo de "+ resultado + " está no nível de : "+ nivelR(resultado))