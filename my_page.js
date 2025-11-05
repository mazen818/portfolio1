let x = true;

function y() {
    const menu = document.getElementById('menu');   
    const close = document.getElementById('close'); 
    const navlinks = document.querySelector('.nav-links');
    if (x) {
        navlinks.style.display = 'flex';
        menu.style.display = 'none';
        close.style.display = 'flex';
        x = false;
    } else {
        navlinks.style.display = 'none';
        menu.style.display = 'flex';
        close.style.display = 'none';
        x = true;
    }   
}

window.onscroll = function() {
    let btn = document.getElementById('btn');
    let h1 = document.querySelector('.about h1');
    let skills = document.querySelector('.skills h1')
    let project = document.querySelector('.my_projects h1')
    let p = document.querySelector('.info p');
    let list = document.querySelector('.list');
    let education = document.querySelector('.about .education');

    if (this.scrollY >= 750) {
        btn.style.display = 'block';
    } else if(this.scrollY <= 750) {
        btn.style.cssText = `display: none;`;
    }
    
    if (scrollY >= 270) {
        h1.style.cssText = `
        display: block;
        animation: h1 1s forwards;`;
    } else if (scrollY <= 210) {
        h1.style.cssText = `display: none;`;
    }

    if (scrollY >= 460) {
        p.style.cssText = `
        display: block;
        animation: p 1s forwards;`;

        education.style.cssText = `
        display:block;
        animation: education 1s;`;
    } else if (scrollY <= 350) {
        p.style.cssText = `display: none;`;
        education.style.cssText = `display: none;`;
    }

    if (scrollY >= 650) {
            list.style.cssText = `
            display: block;
            animation: p 1s forwards;`;
        } else if (scrollY <= 580) {
            list.style.cssText = `display: none;`;
        }

        if (scrollY >= 1200) {
            skills.style.cssText = `
            display: block;
            animation: h1 1s forwards;`;
        } else if (scrollY <= 1120) {
            skills.style.cssText = `display: none;`;
        }
        if (scrollY >= 1750) {
            project.style.cssText = `
            display: block;
            animation: h1 1s forwards;`;
        } else if (scrollY <= 1670) {
            project.style.cssText = `display: none;`;
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

