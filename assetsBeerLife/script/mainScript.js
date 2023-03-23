window.addEventListener("load", () => {

    //Toggle Menu Navigation Bar on Small Device
    const navBtn = document.getElementById("navMenuBtn");
    const navBtnX = document.getElementById("closeNavMenuBtn");
    const navMenu = document.getElementById("toggleNavMenu");

    navBtn.addEventListener("click", () => {
        navMenu.classList.add("active");
    });
    navBtnX.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

    const logined = document.getElementById("logined");
    const nologin = document.getElementById("nologin");

    if (localStorage.getItem("user") != undefined) {
        logined.classList.add("active");
    } else {
        nologin.classList.add("active");
    }



})