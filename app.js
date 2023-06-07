var navLinks = document.getElementById("navLinks");
var timesIcon = document.getElementById("timesIcon");
var menuIcon = document.getElementById("menuIcon");
var test = document.getElementById("test");


function showMenu() {
    navLinks.style.left = "0";
    timesIcon.style.display = "block";
    menuIcon.style.display = "none";
}

function hideMenu() {
    navLinks.style.left = "-100%";
    menuIcon.style.display = "block";
    timesIcon.style.display = "none";
}

function navPopup() {
    test.style.display = "flex";
}


function popupLeave() {
    test.style.display = "none";
}