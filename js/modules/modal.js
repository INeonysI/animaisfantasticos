import clickOutside from "./clickOutside.js";

export default function initModal() {
  const modalContainer = document.querySelector("[data-modal=container]");
  const loginBtn = document.querySelector("[data-modal=abrir");
  const userEvents = ["click", "touchstart"];

  const fechaModal = () => {
    modalContainer.classList.remove("active");
  };

  const ativaModal = (event) => {
    event.preventDefault();
    modalContainer.classList.add("active");

    const modal = modalContainer.querySelector(".modal");
    const fechar = modalContainer.querySelector("[data-modal=fechar]");

    userEvents.forEach((userEvent) => {
      fechar.addEventListener(userEvent, fechaModal);
    });

    clickOutside(modal, userEvents, fechaModal);
  };

  userEvents.forEach((userEvent) => {
    loginBtn.addEventListener(userEvent, ativaModal);
  });
}
