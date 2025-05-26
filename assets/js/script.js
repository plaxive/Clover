
const openBtn = document.querySelector(".open_btn");
const closeBtn = document.querySelector(".close_btn");
const navList = document.querySelector(".nav_list");
const navLinks = document.querySelectorAll(".nav_list ul li a");

const hide = document.querySelector('.nav')

window.onscroll = function () {
  if (window.scrollY > 100) {
    hide.style.display = "none"
    
  } else {
    hide.style.display = "flex"
  }
}

openBtn.addEventListener("click", function() {
  navList.classList.add("active")
})

closeBtn.addEventListener("click", function() {
  navList.classList.remove("active")
} )

navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navList.classList.remove("active");
        });
  });

  // document.addEventListener("click", (event) => {
//     if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
//         navList.classList.remove("active");
//     }
// });ma........................................


// This is one of my project

// preloader javascript
window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = "1";

    let fadeEffect = setInterval(function () {
        if (preloader.style.opacity > "0") {
            preloader.style.opacity -= "0.1";
        } else {
            clearInterval(fadeEffect);
            preloader.style.display = "none";
        }
    }, 200);
});