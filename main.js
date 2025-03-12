const buttonToggle = document.getElementById("btn-toggle-brands");
const tabletBrandsItems = document.querySelectorAll(
  ".brands__item:nth-last-child(-n+5)"
);
const desktopBrandsItems = document.querySelectorAll(
  ".brands__item:nth-last-child(-n+3)"
);

let isBrandsVisible = false;

const toggleBrands = () => {
  if (isBrandsVisible) {
    if (window.innerWidth >= 1366) {
      for (let i = 0; i < desktopBrandsItems.length; i++) {
        desktopBrandsItems[i].style.display = "none";
      }
    } else if (window.innerWidth >= 768) {
      for (let i = 0; i < tabletBrandsItems.length; i++) {
        tabletBrandsItems[i].style.display = "none";
      }
    }
    buttonToggle.querySelector(".button__text").textContent = "Показать все";
    buttonToggle
      .querySelector(".button__icon")
      .classList.remove("button__icon-rotate");
  } else {
    if (window.innerWidth >= 1366) {
      for (let i = 0; i < desktopBrandsItems.length; i++) {
        desktopBrandsItems[i].style.display = "flex";
      }
    } else if (window.innerWidth >= 768) {
      for (let i = 0; i < tabletBrandsItems.length; i++) {
        tabletBrandsItems[i].style.display = "flex";
      }
    }
    buttonToggle.querySelector(".button__text").textContent = "Скрыть";
    buttonToggle
      .querySelector(".button__icon")
      .classList.add("button__icon-rotate");
  }
  isBrandsVisible = !isBrandsVisible;
};

buttonToggle.addEventListener("click", toggleBrands);
