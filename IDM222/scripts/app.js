const menuButton = document.querySelector('.header__hamburger');
menuButton.addEventListener('click', function(){
const menu = document.querySelector('.header__menuListings'); 
menu.classList.toggle('open'); 
})

const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow');