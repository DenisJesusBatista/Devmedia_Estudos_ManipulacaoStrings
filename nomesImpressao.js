let nome_1 = "Ricardo";
let nome_2 = "Alana";

nome_1 = nome_1.replace("Ricardo", "Fábio"); //Fabio
nome_2 = nome_2.replace("Alana", "Bianca"); //Bianca

if (nome_1.length > nome_2.length) { //False
    console.log("O nome 1 é maior");
} else if (nome_1.length < nome_2.length) { //True
    console.log("O nome 2 é maior");
} else {
    console.log("Os dois nomes têm o mesmo tamanho");
}