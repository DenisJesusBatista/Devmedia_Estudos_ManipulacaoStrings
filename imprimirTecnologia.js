let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
    case "back-end":
        console.log(`Estude Node.js para programação ${stack} em ${linguagem}`);
        break;
    case "front-end":
        console.log(`Estudo React para programação ${stack} em ${linguagem}`);
        break;
    case "mobile":
        console.log(`Estudo React Native para programação ${stack} em ${linguagem}`);
        break;
    default:
        console.log(`Tecnologia indisponível para ${stack}`); break;

}