const navTogglers = document.querySelectorAll(".navbar-toggler");
const modalTogglers = document.querySelectorAll(".modal-toggler");

navTogglers.forEach((toggler) => {
    toggler.addEventListener("click", () => {
        let target = toggler.getAttribute("data-toggle");
        document.getElementById(target).classList.toggle("active");
    });
});
modalTogglers.forEach((toggler) => {
    toggler.addEventListener("click", () => {
        let target = toggler.getAttribute("data-toggle");
        document.getElementById(target).classList.toggle("active");
    });
});