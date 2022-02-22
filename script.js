const projectLinks = document.querySelectorAll(".project-link");
const closeButtons = document.querySelectorAll(".modal-close-btn");
const burgerBtn = document.querySelector(".burger-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLis = document.querySelectorAll(".mobile-nav ul li");;
const body = document.querySelector("body");

const openPopup = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const popupName = event.currentTarget.getAttribute("data-popup-open");
  document.querySelector(`.modal[data-popup="${popupName}"]`).classList.add("open");
  document.querySelector("body").classList.add("no-scroll");
}

const closePopup = (event) => {
  event.preventDefault();
  event.currentTarget.closest(".modal").classList.remove("open");
  document.querySelector("body").classList.remove("no-scroll");
}

Array.from(projectLinks).forEach((link) => {
  link.addEventListener("click", openPopup);
});

Array.from(closeButtons).forEach((btn) => {
  btn.addEventListener("click", closePopup);
});

body.addEventListener("click", (e) => {
  //console.log(e.target);

  if (body.classList.contains("no-scroll") && e.target.classList.contains("modal")) {
    document.querySelector(".modal.open").classList.remove("open");
    body.classList.remove("no-scroll");
  }
});

const toggleMenu = () => {
  burgerBtn.classList.toggle("open");
  mobileNav.classList.toggle("open");

  if (mobileNav.classList.contains("open")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
}

burgerBtn.addEventListener("click", () => toggleMenu());

Array.from(mobileNavLis).forEach((li) => {
  li.addEventListener("click", () => toggleMenu());
});
