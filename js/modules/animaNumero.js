export default function initAnimaNumeros() {
  const animaNumeros = () => {
    const numeros = document.querySelectorAll("[data-numero]");
    console.log(numeros);

    numeros.forEach((numero) => {
      const numeroFinal = +numero.innerText;
      numero.innerText = 0;

      const incrementaNumero = setInterval(() => {
        const incremento = Math.floor(numeroFinal / 100);
        if (numeroFinal < +numero.innerText) {
          numero.innerText = numeroFinal;
          clearInterval(incrementaNumero);
        }
        numero.innerText = +numero.innerText + incremento;
      }, 25 * Math.random());
    });
  };

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver((mutation) => {
    if (mutation[0].target.classList.contains("visible")) {
      observer.disconnect();
      animaNumeros();
    }
  });
  observer.observe(observerTarget, { attributes: true });
}
