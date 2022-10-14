var hamburgerdiv = document.querySelector(".hamburger")
var mobilelinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector('.backdrop')

function dosomething() {
    hamburgerdiv.classList.toggle("showburger")
    mobilelinks.classList.toggle("show-mobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
}