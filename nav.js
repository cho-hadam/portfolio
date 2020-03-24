const burger = document.querySelector('.burger');
const navLists = document.querySelector('.nav-lists');

function init() {
    burger.addEventListener("click", () => {
        navLists.classList.toggle('nav-active');
        burger.classList.toggle('cancel');
    })
}

init();