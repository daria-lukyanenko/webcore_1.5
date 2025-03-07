const buttonShow = document.getElementById("btn-show-brands");
const buttonHide = document.getElementById("btn-hide-brands");
const tabletBrandsItems = document.querySelectorAll(
  ".brands__item:nth-last-child(-n+5)"
);
const desktopBrandsItems = document.querySelectorAll(
  ".brands__item:nth-last-child(-n+3)"
);

buttonHide.style.display = "none";

const showAllBrands = () => {
  if (window.innerWidth >= 1366) {
    for (let i = 0; i < desktopBrandsItems.length; i++) {
      desktopBrandsItems[i].style.display = "flex";
    }
    buttonShow.style.display = "none";
    buttonHide.style.display = "flex";
  } else if (window.innerWidth >= 768) {
    for (let i = 0; i < tabletBrandsItems.length; i++) {
      tabletBrandsItems[i].style.display = "flex";
    }
    buttonShow.style.display = "none";
    buttonHide.style.display = "flex";
  }
};

buttonShow.addEventListener("click", showAllBrands);

const hideBrands = () => {
  if (window.innerWidth >= 1366) {
    for (let i = 0; i < desktopBrandsItems.length; i++) {
      desktopBrandsItems[i].style.display = "none";
    }
  } else if (window.innerWidth >= 768) {
    for (let i = 0; i < tabletBrandsItems.length; i++) {
      tabletBrandsItems[i].style.display = "none";
    }
  }
  buttonShow.style.display = "flex";
  buttonHide.style.display = "none";
};

buttonHide.addEventListener("click", hideBrands);
