
const menuButton = document.querySelector('.header__hamburger');
menuButton.addEventListener('click', function(){
const menu = document.querySelector('.header__menuListings'); 
menu.classList.toggle('open'); 
})

/*
localStorage.setItem('hasRun', 'false');
const hasRun = localStorage.getItem('hasRun') || null;
const lastRun = localStorage.getItem('lastRun');
const intro = document.querySelector('.page__load');
console.log(hasRun, lastRun);
if (hasRun == 'false'){
    intro.classList.add('animationActivate');
    localStorage.removeItem('hasRun', 'false');
    localStorage.setItem('lastRun', JSON.stringify(new Date()));
    console.log(hasRun, lastRun);
    setTimeout(function(){
    intro.classList.remove('animationActivate');
    localStorage.setItem('hasRun', 'false');
    }, 3000);
}
*/

//Default state is INACTIVE
//Use JS to ACTIVATE IT
//DEACTIVATE it after some time

const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow');
const posts = document.querySelector('.main__postReel');
let reelPosition = 1; 
console.log(reelPosition);
rightArrow.addEventListener('click', function(){
    reelPosition++;
    console.log(reelPosition);
    if (reelPosition == 1){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post1 smallIcon" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post2 medIcon" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post3 largeIcon" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="na.html" class="posthref"><img class="main__icon post4 medIcon" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post5 smallIcon" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="wr.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/wrf.jpg" alt="post icon" /></a></div>';
    }else if (reelPosition == 2){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post1 smallIcon" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post2 medIcon" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post3 largeIcon" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post4 medIcon" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="na.html" class="posthref"><img class="main__icon post5 smallIcon" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="aau.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/aau copy.png" alt="post icon" /></a></div>';
    }
})
