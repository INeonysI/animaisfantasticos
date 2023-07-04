export default function initAnimaisNumeros() {
  const criaAnimal = (animal) => {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  };

  const buscaNumeros = async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    json.forEach((animal) => {
      console.log(animal);
      const div = criaAnimal(animal);
      const section = document.querySelector("[data-section='numeros']");

      section.appendChild(div);
    });
  };
  buscaNumeros("./animaisapi.json");
}
