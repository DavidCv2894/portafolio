
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

///// Ver Mas Button /////
let text = document.querySelectorAll('.main__intro__info--p');
const button__text = document.querySelector('#button__text');
button__text.addEventListener('click', ()=>{
    text.forEach(element => {
        element.classList.toggle('main__intro__info--p--mostrar');
        
    });
    if (button__text.innerHTML == 'Ver mas') {
        button__text.innerHTML='Ver menos';
     }
     else{
         button__text.innerHTML='Ver mas';
     }
});



