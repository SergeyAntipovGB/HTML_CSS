const menuActive = document.querySelector('.menu-active');// initial menu
const buttonMenu = document.querySelector('.burger-btn');// initial button

function toggleMenu() {// toggle position 'hidden'
    menuActive.classList.toggle('hidden');
}

buttonMenu.addEventListener('click', toggleMenu);// watch to click of .burger-btn