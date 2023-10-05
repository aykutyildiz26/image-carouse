var slider = document.querySelector('.slider');
var images = document.querySelectorAll('.slider img');

var currentSlide = 0;
var slideWidth = images[0].clientWidth;

function showSlide(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    slider.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

 document.getElementById('next-btn').addEventListener('click', nextSlide);
 document.getElementById('prev-btn').addEventListener('click', prevSlide);
