const menuActive = document.querySelector('.menu-active');
const buttonMenu = document.querySelector('.burger-btn');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

buttonMenu.addEventListener('click', toggleMenu);