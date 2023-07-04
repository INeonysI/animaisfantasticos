export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab=menu] li");
  const tabContent = document.querySelectorAll("[data-tab=content] section");
  console.log(tabContent);

  const handleClick = (index) => {
    tabContent.forEach((item) => {
      item.classList.remove("visible");
    });
    tabContent[index].classList.add("visible");
  };

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      handleClick(index);
    });
  });
}
