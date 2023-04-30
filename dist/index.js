"use strict";
const nomeParty = document.querySelector("#nameParty");
const nomeConvit = document.querySelector("#convitParty");
const btnverification = document.querySelector("#verification");
const listNome = ["Lucas", "Jasna", "rf", "link"];
const listParty = ["LS30", "Finn", "Neymar", "Stephen Curry"];
btnverification.addEventListener("click", () => {
    if (listNome.includes(nomeParty.value) &&
        listParty.includes(nomeConvit.value)) {
        document.querySelector("#result").textContent = "Entrada permitida!";
    }
    else {
        document.querySelector("#result").textContent = "Entrada negada!";
    }
    console.log(listNome);
    console.log(listParty);
    console.log(nomeParty.value);
    console.log(nomeConvit.value);
});
