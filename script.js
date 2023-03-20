const iconMenu = document.querySelector('.header__info-burger')
const menuBurger = document.querySelector('.burger__nav')
if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBurger.classList.toggle('_active')
    })
    
    menuBurger.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', function(i) {
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_active')
            menuBurger.classList.remove('_active')
        })
    })
}
