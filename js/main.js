$(document).ready(function() {
    $('.slider').slick({
        infinite: false,
        initialSlide: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
    })
})

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
})

const btnDes = document.querySelectorAll('.slider__card .btn')

for (let btnDesI of btnDes) {
    btnDesI.classList.add('btnDisabled')
}

