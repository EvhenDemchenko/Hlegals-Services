const HEADER = document.querySelector('.header-botoom__nav')
const EFFECT = document.querySelector('.header-nav__effect')

const CLOSE = document.querySelector('.close').addEventListener('click',() => {
    HEADER.classList.remove('qqq')
    EFFECT.classList.remove('open')
})
const BURGER = document.querySelector('.burger-menu__img').addEventListener('click', ()=>{
    HEADER.classList.add('qqq')
    EFFECT.classList.add('open')
})
