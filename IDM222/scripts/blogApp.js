
const menuButton = document.querySelector('.header__hamburger');
const filterButton = document.querySelector('.postFilter');
const categoryField = document.querySelector('.dropDown');


menuButton.addEventListener('click', function(){
const menu = document.querySelector('.header__menuListings'); 
menu.classList.toggle('open'); 
})

//The blog functionality had to be split into two scripts because of an unknown error that nullifies the other carousel code if this one is present
//Will fix in future versions but currently am not sure how to do so
//I also will be figuring out a better way to optimize this, but am constrained by time
const all = document.querySelector('.js-all');
const art = document.querySelector('.js-art');
const animation = document.querySelector('.js-animation');
const design = document.querySelector('.js-design');
const editing = document.querySelector('.js-editing');
const music = document.querySelector('.js-music');
const photos = document.querySelector('.js-photos');
const schoolwork = document.querySelector('.js-schoolwork');

//each button adds the lit class to highlight itself while the inner HTML of the post area changes for each filter manually.
const postArea = document.querySelector('.js-postArea');
all.addEventListener('click', function(){
    postArea.innerHTML = '<a href="plasticplanet.html" class="all music art animation editing fadeIn"><img class="blog__icon" src="media/plasticplanet.png" alt="post icon" /></a><a href="yci.html" class="all animation fadeIn"><img class="blog__icon" src="media/sleepy.jpg" alt="post icon" /></a><a href="sp.html" class="all schoolWork designs fadeIn"><img class="blog__icon" src="media/pupypyi copy.png" alt="post icon" /></a><a href="na.html" class="all art fadeIn"><img class="blog__icon" src="media/lampifeat.png" alt="post icon" /></a><a href="trt.html" class="all music schoolWork fadeIn"><img class="blog__icon" src="media/aau copy.png" alt="post icon" /></a><a href="wr.html" class="all photography fadeIn"><img class="blog__icon" src="media/wrf.jpg" alt="post icon" /></a>'
    all.classList.add('lit');
    art.classList.remove('lit');
    animation.classList.remove('lit');
    design.classList.remove('lit');
    editing.classList.remove('lit');
    music.classList.remove('lit');
    photos.classList.remove('lit');
    schoolwork.classList.remove('lit');
})
art.addEventListener('click', function(){
    postArea.innerHTML = '<a href="plasticplanet.html" class="all music art animation editing fadeIn"><img class="blog__icon" src="media/plasticplanet.png" alt="post icon" /></a><a href="yci.html" class="all animation fadeIn"><img class="blog__icon" src="media/sleepy.jpg" alt="post icon" /></a><a href="na.html" class="all art fadeIn"><img class="blog__icon" src="media/lampifeat.png" alt="post icon" /></a>'
    all.classList.remove('lit');
    art.classList.add('lit');
    animation.classList.remove('lit');
    design.classList.remove('lit');
    editing.classList.remove('lit');
    music.classList.remove('lit');
    photos.classList.remove('lit');
    schoolwork.classList.remove('lit');
})
animation.addEventListener('click', function(){
    postArea.innerHTML = '<a href="plasticplanet.html" class="all music art animation editing fadeIn"><img class="blog__icon" src="media/plasticplanet.png" alt="post icon" /></a><a href="yci.html" class="all animation fadeIn"><img class="blog__icon" src="media/sleepy.jpg" alt="post icon" /></a>'
    all.classList.remove('lit');
    art.classList.remove('lit');
    animation.classList.add('lit');
    design.classList.remove('lit');
    editing.classList.remove('lit');
    music.classList.remove('lit');
    photos.classList.remove('lit');
    schoolwork.classList.remove('lit');
})
design.addEventListener('click', function(){
    postArea.innerHTML = '<a href="sp.html" class="all schoolWork designs fadeIn"><img class="blog__icon" src="media/pupypyi copy.png" alt="post icon" /></a>'
    all.classList.remove('lit');
    art.classList.remove('lit');
    animation.classList.remove('lit');
    design.classList.add('lit');
    editing.classList.remove('lit');
    music.classList.remove('lit');
    photos.classList.remove('lit');
    schoolwork.classList.remove('lit');
})
editing.addEventListener('click', function(){
    postArea.innerHTML = '<a href="plasticplanet.html" class="all music art animation editing fadeIn"><img class="blog__icon" src="media/plasticplanet.png" alt="post icon" /></a><a href="trt.html" class="all editing music schoolWork fadeIn"><img class="blog__icon" src="media/aau copy.png" alt="post icon" /></a>'
    all.classList.remove('lit');
    art.classList.remove('lit');
    animation.classList.remove('lit');
    design.classList.remove('lit');
    editing.classList.add('lit');
    music.classList.remove('lit');
    photos.classList.remove('lit');
    schoolwork.classList.remove('lit');
})
music.addEventListener('click', function(){
    postArea.innerHTML = '<a href="plasticplanet.html" class="all music art animation editing fadeIn"><img class="blog__icon" src="media/plasticplanet.png" alt="post icon" /></a><a href="yci.html" class="all art animation music fadeIn"><img class="blog__icon" src="media/sleepy.jpg" alt="post icon" /></a><a href="trt.html" class="all editing music schoolWork"><img class="blog__icon" src="media/aau copy.png" alt="post icon" /></a>'
    all.classList.remove('lit');
    art.classList.remove('lit');
    animation.classList.remove('lit');
    design.classList.remove('lit');
    editing.classList.remove('lit');
    music.classList.add('lit');
    photos.classList.remove('lit');
    schoolwork.classList.remove('lit');
})
photos.addEventListener('click', function(){
    postArea.innerHTML = '<a href="wr.html" class="all photography fadeIn"><img class="blog__icon" src="media/wrf.jpg" alt="post icon" /></a>'
    all.classList.remove('lit');
    art.classList.remove('lit');
    animation.classList.remove('lit');
    design.classList.remove('lit');
    editing.classList.remove('lit');
    music.classList.remove('lit');
    photos.classList.add('lit');
    schoolwork.classList.remove('lit');
})
schoolwork.addEventListener('click', function(){
    postArea.innerHTML = '<a href="sp.html" class="all schoolWork designs fadeIn"><img class="blog__icon" src="media/pupypyi copy.png" alt="post icon" /></a><a href="trt.html" class="all editing music schoolWork fadeIn"><img class="blog__icon" src="media/aau copy.png" alt="post icon" /></a>'
    all.classList.remove('lit');
    art.classList.remove('lit');
    animation.classList.remove('lit');
    design.classList.remove('lit');
    editing.classList.remove('lit');
    music.classList.remove('lit');
    photos.classList.remove('lit');
    schoolwork.classList.add('lit');
})
