
//// nav menu__movil ////
const nav__button__movil = document.querySelector('#nav__list__button__movil');
const nav__list__movil = document.querySelector('#nav__list__movil');
const nav__list_movil__link = document.querySelectorAll('.nav__list__li--link');
const header_html = document.querySelector('#header');
nav__button__movil.addEventListener('click', ()=>{
    nav__list__movil.classList.toggle('nav__list--movil');
    header_html.classList.toggle('header--movil-menu');
});
nav__list_movil__link.forEach(link => {
    link.addEventListener('click', ()=>{
        nav__list__movil.classList.remove('nav__list--movil');
        header_html.classList.remove('header--movil-menu')
    })
});





