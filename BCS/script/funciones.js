
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var body = document.querySelector('body');
    var navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('fixed-top');
            body.style.paddingTop = navbarHeight + 'px';
        } else {
            navbar.classList.remove('fixed-top');
            body.style.paddingTop = '0';
        }
    });
});