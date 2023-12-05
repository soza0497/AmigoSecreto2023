let buttonOpenNav = document.getElementById("nav__open");
let buttonCloseNav = document.getElementById("nav__close");

buttonOpenNav.addEventListener("click", () => {
    let navBarMobile = document.getElementById("nav");

    navBarMobile.style.right = "0";
});

buttonCloseNav.addEventListener("click", () => {
    let navBarMobile = document.getElementById("nav");

    navBarMobile.style.right = "-100%";
});