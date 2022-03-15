
const menuButton = document.querySelector('.header__hamburger');
const filterButton = document.querySelector('.postFilter');
const categoryField = document.querySelector('.dropDown');


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

//Homepage carousel
const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow');
const posts = document.querySelector('.main__postReel');
const card = document.querySelector('.main__postCard');
let reelPosition = 3; 
console.log(reelPosition);
leftArrow.addEventListener('click', function(event){
    if (reelPosition <= 1){
        reelPosition = 7;
    }
    reelPosition--;
    console.log(reelPosition);
    if (reelPosition == 6){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="na.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post off icon"<a href="sp.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/pupypyi copy.png" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Wandering Regrets</h1><p>The only photography class I have taken was taught in black and white... </p><button class="main__readMore"><a href="wr.html">Read More</a></button>';
    }else if (reelPosition == 5){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="na.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="yci.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/sleepy.jpg" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>The Road Trailer</h1><p>This was my favorite class to take so far, as it had uncovered my hidden skills in audio... </p><button class="main__readMore"><a href="trt.html">Read More</a></button>';
    }else if (reelPosition == 4){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="na.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post off icon"<a href="plasticplanet.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/plasticplanet.png" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Lava Lamp Ani</h1><p>This is one of my favorite art ideas from recent years. It is my titular character Ani... </p><button class="main__readMore"><a href="na.html">Read More</a></button>';
    }else if (reelPosition == 3){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="na.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="wr.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/wrf.jpg" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Study Pup</h1><p>For the record, this project was done in a group of four, so I cannot...</p><button class="main__readMore"><a href="sp.html">Read More</a></button>';
    }else if (reelPosition == 2){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="na.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="trt.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/aau copy.png" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Youtube Intro</h1><p>A simple animated idea I had a while back that ended up turning out very well... </p><button class="main__readMore"><a href="yci.html">Read More</a></button>';
    }else if (reelPosition == 1){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="na.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/lampifeat.png" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Plastic Planet</h1><p>In addition to creating one of my favorite art pieces ever, this song of mine... </p><button class="main__readMore"><a href="plasticplanet.html">Read More</a></button>'
    }
    
})
rightArrow.addEventListener('click', function(event){
    if (reelPosition >= 6){
        reelPosition = 0;
    }
    reelPosition++;
    console.log(reelPosition);
    if (reelPosition == 6){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="na.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post off icon"<a href="sp.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/pupypyi copy.png" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Wandering Regrets</h1><p>The only photography class I have taken was taught in black and white... </p><button class="main__readMore"><a href="wr.html">Read More</a></button>';
    }else if (reelPosition == 5){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="na.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="yci.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/sleepy.jpg" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>The Road Trailer</h1><p>This was my favorite class to take so far, as it had uncovered my hidden skills in audio... </p><button class="main__readMore"><a href="trt.html">Read More</a></button>';
    }else if (reelPosition == 4){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="na.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post off icon"<a href="plasticplanet.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/plasticplanet.png" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Lava Lamp Ani</h1><p>This is one of my favorite art ideas from recent years. It is my titular character Ani... </p><button class="main__readMore"><a href="na.html">Read More</a></button>';
    }else if (reelPosition == 3){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="na.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="wr.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/wrf.jpg" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Study Pup</h1><p>For the record, this project was done in a group of four, so I cannot...</p><button class="main__readMore"><a href="sp.html">Read More</a></button>';
    }else if (reelPosition == 2){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="na.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/lampifeat.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="trt.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/aau copy.png" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Youtube Intro</h1><p>A simple animated idea I had a while back that ended up turning out very well... </p><button class="main__readMore"><a href="yci.html">Read More</a></button>';
    }else if (reelPosition == 1){
    posts.innerHTML = '<div class="main__post smallIcon icon"><a href="trt.html" class="posthref"><img class="main__icon post1 smallIcon fadeInSmall" src="media/aau copy.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="wr.html" class="posthref"><img class="main__icon post2 medIcon fadeInMed" src="media/wrf.jpg" alt="post icon" /></a></div><div class="main__post largeIcon icon"><a href="plasticplanet.html" class="posthref"><img class="main__icon post3 largeIcon fadeIn" src="media/plasticplanet.png" alt="post icon" /></a></div><div class="main__post medIcon icon"><a href="yci.html" class="posthref"><img class="main__icon post4 medIcon fadeInMed" src="media/sleepy.jpg" alt="post icon" /></a></div><div class="main__post smallIcon icon"><a href="sp.html" class="posthref"><img class="main__icon post5 smallIcon fadeInSmall" src="media/pupypyi copy.png" alt="post icon" /></a></div><div class="main__post off icon"<a href="na.html" class="posthref"><img class="main__icon postNull smallIcon" src="media/lampifeat.png" alt="post icon" /></a></div>';
    card.innerHTML = '<h1>Plastic Planet</h1><p>In addition to creating one of my favorite art pieces ever, this song of mine... </p><button class="main__readMore"><a href="plasticplanet.html">Read More</a></button>'
    }
})
//Blog filter

