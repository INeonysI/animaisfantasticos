import clickOutside from "./clickOutside.js";

export default function DropdownMenu() {
  const dropdownBtns = document.querySelectorAll("[data-dropdown]");
  const userEvents = ["click", "touchstart"];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    //Se certifica que o elemento será fechado ao clicar fora dele
    clickOutside(this, userEvents, () => this.classList.remove("active"));
  }

  dropdownBtns.forEach((element) => {
    userEvents.forEach((userEvent) => {
      element.addEventListener(userEvent, handleClick);
    });
  });
}
