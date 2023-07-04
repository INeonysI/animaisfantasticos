export default function initAccordion() {
  const dts = document.querySelectorAll("[data-accordion] dt");
  console.log(dts[0].nextElementSibling);
  dts.forEach((dt) => {
    dt.addEventListener("click", () => {
      const dd = dt.nextElementSibling;
      dt.classList.toggle("active");
      dd.classList.toggle("active");
    });
  });
}
