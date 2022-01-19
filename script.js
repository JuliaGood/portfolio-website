const projectLinks = document.querySelectorAll(".project-link");
const closeButtons = document.querySelectorAll(".modal-close-btn");

const openPopup = (event) => {
  event.preventDefault();
  const popupName = event.currentTarget.getAttribute("data-popup-open");
  document.querySelector(`.modal[data-popup="${popupName}"]`).style.display = "block";
  document.querySelector('body').style.overflow = "hidden";
}

const closePopup = (event) => {
  event.preventDefault();
  event.currentTarget.closest(".modal").style.display = "none";
  document.querySelector('body').style.overflow = "visible";
}

Array.from(projectLinks).forEach((link) => {
  link.addEventListener("click", openPopup);
});

Array.from(closeButtons).forEach((btn) => {
  btn.addEventListener("click", closePopup);
});
