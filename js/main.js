const category = document.querySelector(".header__nav");
const openMenu = document.querySelector(".header__menu");
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".header__subscribe-btn");
const closeModal = document.querySelector(".modal__close");
const modalClose = document.querySelector(".modal__subscribe-btn")


modal.addEventListener("click", (e) =>{
  console.log(e.target.className);
  if(e.target.className !== "modal__body" && e.target.className !== "modal__title"){
    modal.classList.remove("modal__active");
  }
})

openModal.addEventListener("click", () => {
  modal.classList.add("modal__active");
});

modalClose.addEventListener("click",() => {
  modal.classList.remove("modal__active");
} )

closeModal.addEventListener("click", () => {
  modal.classList.remove("modal__active");
});

openMenu.addEventListener("click", () => {
  category.classList.toggle("active");
});

const closeMenu = () => {
  category.classList.remove("active");
};

category.innerHTML = `<button class="header__nav__close" onclick="closeMenu()">
<img src="/assets/images/x.png" alt="close icon"  width="25">
</button>`;

const getCategoryName = (name) => {
  localStorage.setItem("category", name);
};
const categoryRow = ({ name }) => {
  return `<a href="/pages/category.html" onclick="getCategoryName('${name}')">${name}</a>`;
};
const getCategory = () => {
  categories.map((el) => (category.innerHTML += categoryRow(el)));
};
getCategory();
