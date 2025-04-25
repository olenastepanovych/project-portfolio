import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Navigation, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
const refs = {
    prevButton: document.querySelector('.swiper-button-prev'),
    nextButton: document.querySelector('.swiper-button-next'),
    projectsBtnBox: document.querySelector('.projects-container.swiper'),
};

const swiper = new Swiper('.projects-container.swiper', {
    modules: [Navigation, Keyboard],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1000,
    loop: false,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    },
    on: {
    init: function () {
        updateNavButtons(this, refs);
    },
    slideChange: function () {
        updateNavButtons(this, refs);
    },
    },
});

refs.projectsBtnBox.addEventListener('mousedown', e => {
    const button = e.target.closest('button');
    if (!button) return;
    setTimeout(() => button.blur(), 0);
});
});

function updateNavButtons(swiper, refs) {
if (swiper.isBeginning) {
    refs.prevButton.setAttribute('disabled', 'true');
} else {
    refs.prevButton.removeAttribute('disabled');
}

if (swiper.isEnd) {
    refs.nextButton.setAttribute('disabled', 'true');
} else {
    refs.nextButton.removeAttribute('disabled');
}
}