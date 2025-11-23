
let x = true;

function y() {
    const menu = document.getElementById('menu');   
    const close = document.getElementById('close'); 
    const navlinks = document.querySelector('.nav-links');
    if (x) {
        navlinks.style.cssText = `display: flex;
        animation: nav-open 0.4s forwards alternate;`;
        menu.style.display = 'none';
        close.style.display = 'flex';
        x = false;
    } else if (x==false) {
        navlinks.style.cssText = `animation: nav-open 0.4s ease-in-out forwards reverse;`;
        menu.style.display = 'flex';
        close.style.display = 'none';
        x = true;
        
    }   
}
//--------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------


window.onscroll = function() {
    let btn = document.getElementById('btn');
    if(scrollY >= 700) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

function topfunction() {
    document.documentElement.scrollTop = 0;
}

onload = function() {
    let image = document.querySelector('.image');
    image.style.cssText = `animation: image 1.5s alternate;`;
    let page = document.querySelector('.page');
    page.style.cssText = `animation: page 1.5s alternate;`;
}   

