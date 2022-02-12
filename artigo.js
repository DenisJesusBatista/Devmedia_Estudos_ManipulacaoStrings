let conteudo = "Neste artigo de JavaScript veremos como utilizar o metodo substring() para";

let tamanho = conteudo.length;

let resumo = "";

if (tamanho > 100) {
    resumo = conteudo.substr(0, 97);
    resumo += "...";
} else {
    resumo = conteudo;
}

console.log(resumo);