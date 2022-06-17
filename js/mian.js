// Slider

$(function () {
    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
})


// Price

const priceBtns = document.querySelectorAll('.form__btn-box button');
const priceItems = document.querySelectorAll('.price__item');

function hidePrice() {
    priceItems.forEach(item => item.classList.add('hide'));
    priceBtns.forEach(btn => btn.classList.remove('active'));
}

function showPrice(index) {
    priceItems[index].classList.remove('hide');
    priceBtns[index].classList.add('active');
}

hidePrice();
showPrice(0);

priceBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hidePrice();
    showPrice(index)
}));
