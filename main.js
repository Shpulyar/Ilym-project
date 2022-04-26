$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});


let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
}

let body = document.querySelector('body');

if (isMobile.any()) {
    body.classList.add('touch');
    let fire = document.querySelector('.fire');
    fire.addEventListener('click', function () {
        subMenu.classList.toggle('open');
    })

} else {
    body.classList.add('mouse');
}



const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (const item of slides) {
        item.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n => {
    for (i of dots) {
        i.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length-1) {
        index = 0;
        prepareCurentSlide(index);
    } else {
        index++;
        prepareCurentSlide(index);
    }
}
const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurentSlide(index);
    } else {
        index--;
        prepareCurentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);




