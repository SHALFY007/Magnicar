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