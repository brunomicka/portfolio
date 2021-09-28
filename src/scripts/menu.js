const btnMobileMenu = document.querySelector('.header-icon-menu')
const btnMobileClose = document.querySelector('.menu-close')
const mobileMenu = document.querySelector('.menu')

btnMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})

btnMobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})
