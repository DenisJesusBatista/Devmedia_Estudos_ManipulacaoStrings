interface Numero1 {
    id: string,
};
interface Numero2 {
    id: string,
};

Numero1.id = "9999-9999";
Numero2.id = " 9999-9999 ";

if (Numero1.id == Numero2.id) {
    console.log("O número: " + ${ Numero1.id } + "é igual ao número: " + ${ Numero2.id });
} else {
    console.log("Diferente");
}

console.log(telefone_1);
console.log(telefone_2);