window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar-top");

var sticky = navbar.offsetTop;


function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar-fixed-top");
    } else {
        navbar.classList.remove("navbar-fixed-top");
    }
}