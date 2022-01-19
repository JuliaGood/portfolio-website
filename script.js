const projectLinks = document.querySelectorAll(".project-link");
const closeButtons = document.querySelectorAll(".modal-close-btn");

Array.from(projectLinks).forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const popupName = link.getAttribute("data-popup-open");
    document.querySelector(`.modal[data-popup="${popupName}"]`).style.display = "block";
    document.querySelector('body').style.overflow = "hidden";
  });
});

Array.from(closeButtons).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btn.closest(".modal").style.display = "none";
    document.querySelector('body').style.overflow = "visible";
  });
});
