const nomeParty = document.querySelector("#nameParty") as HTMLInputElement;
const nomeConvit = document.querySelector("#convitParty") as HTMLInputElement;
const btnverification = document.querySelector(
  "#verification"
) as HTMLButtonElement;

const listNome: string[] = ["Lucas", "Jasna", "rf", "link"];
const listParty: string[] = ["LS30", "Finn", "Neymar", "Stephen Curry"];

btnverification.addEventListener("click", () => {
  if (
    listNome.includes(nomeParty.value) &&
    listParty.includes(nomeConvit.value)
  ) {
    document.querySelector("#result")!.textContent = "Entrada permitida!";
  } else {
    document.querySelector("#result")!.textContent = "Entrada negada!";
  }

  console.log(listNome);
  console.log(listParty);
  console.log(nomeParty.value);
  console.log(nomeConvit.value);
});
