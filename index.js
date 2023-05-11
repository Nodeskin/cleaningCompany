const menu = document.querySelector('.menu-icon')
const close = document.querySelector('.close-icon')
const menuNav = document.querySelector('.menu-navbar')
menu.addEventListener('click', () =>{
menu.style.display = "none";
close.style.display = "flex"
menuNav.style.display = "flex"

})

close.addEventListener('click', () =>{
    menu.style.display = "flex";
    close.style.display = "none"
    menuNav.style.display = "none"
        
    })



