window.addEventListener('scroll', () => {
    if (pageYOffset > 100) {
        document.querySelector('.header_scroll').classList.remove('hide')
    } else {
        document.querySelector('.header_scroll').classList.add('hide')
    }
})

const menu_buttons = document.querySelectorAll('.menu_button')
const menu = document.querySelector('.menu')
const menu_btn = document.querySelector('.menu_btn')

for (let btn of menu_buttons) {
    btn.addEventListener('click', () => {
        menu.classList.remove('hide')
    })
}

menu_btn.addEventListener('click',() => {
    menu.classList.add('hide')
})

const screenWidth = window.screen.width

const slider = document.querySelector('.main_goods_viewport')
const backBtn = document.querySelector('.goods_back_btn')
const nextBtn = document.querySelector('.goods_next_btn')
let curLeft = 0
const child = slider.children.length
let valueSlide = screenWidth > 1440? 263 : 18.26
let viewChild = 5
let size = screenWidth > 1440? 'px' : 'vw'

nextBtn.addEventListener('click', () => {
    if (curLeft <= -child*valueSlide +viewChild*valueSlide) {
        curLeft = 0
    } else {
        curLeft = curLeft - valueSlide
    }
    slider.style.left = curLeft + size
})

backBtn.addEventListener('click', () => {
    if (curLeft >= 0) {
        curLeft = -child*valueSlide +viewChild*valueSlide
    } else {
        curLeft = curLeft + valueSlide
    }
    slider.style.left = curLeft + size
})