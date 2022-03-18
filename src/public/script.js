function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    var x = document.querySelectorAll(".bar");
    console.log(x);
}