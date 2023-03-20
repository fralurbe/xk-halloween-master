
// initialized AOS Librery
AOS.init();

let menu_bar = document.getElementById('menu_bar');
let menu = document.getElementById('menu');

menu_bar.addEventListener('click', ()=> {
    menu.classList.toggle('show-menu')
});

