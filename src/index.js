let nome = "Strange";
let XP = parseInt(Math.random() * 11000 + 1);

console.log(`A quantidade de XP do Herói ${nome} é de ${XP}.`);

let niveis = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" },
    { limite: Infinity, nome: "Radiante" }
];

let nivel = "";

for (let i = 0; i < niveis.length; i++) {
    if (XP <= niveis[i].limite) {
        nivel = niveis[i].nome;
        break;
    }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);