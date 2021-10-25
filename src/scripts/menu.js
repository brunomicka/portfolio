const btnMobileMenu = document.querySelector('.header-icon-menu')
const btnMobileClose = document.querySelector('.menu-close')
const mobileMenu = document.querySelector('.menu')

btnMobileMenu.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'
    mobileMenu.classList.add('active')
})

btnMobileClose.addEventListener('click', () => {
    document.body.style.overflow = ''
    mobileMenu.classList.remove('active')
})
