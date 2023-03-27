// * add sticky navbar
const scroll_nav = document.querySelector('#navigation');
const humburger2 = document.querySelector('#navigation .hamburger')
const underline = document.querySelector('#navigation .hamburger .under-line')
window.addEventListener('scroll', myfunction)
function myfunction() {
    if (window.scrollY > 10) {
        scroll_nav.classList.add('sticky-nav')
        humburger2.classList.add('color-hum')
        underline.classList.add('color-hum')
    } else {
        scroll_nav.classList.remove('sticky-nav')
        humburger2.classList.remove('color-hum')
        underline.classList.remove('color-hum')
    }
}

// *add transition in hamburger
const humburger = document.querySelector('#navigation .hamburger');
const nav_transition = document.querySelector('#navigation ul');
const home = document.querySelector('#home');
const nav = document.querySelector('#navigation .all-section .logo a');
humburger.addEventListener('click', () => {
    humburger.classList.toggle('active')
    nav_transition.classList.toggle('active')
    home.classList.toggle('active')
    nav.classList.toggle('active')
})


