const hamburger = document.querySelector(".hamburger")
const hamburgerBars = document.querySelectorAll(".bar")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-links")
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburgerBars.forEach(bars => {
        bars.classList.toggle("active")
    });
})
navLinks.forEach(links => {
    links.addEventListener("click", () => {
        navMenu.classList.remove("active")
        hamburgerBars.forEach(bars => {
            bars.classList.remove("active")
        });
    })
});