// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// mobile navbar

// variables 

const mobileMenuBtn = document.getElementById("mobileBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.querySelector('.mobileMenuLinks.active');
const mobileNavLinks = mobileMenu.children;

console.log(mobileNavLinks)

console.log(mobileMenu)

// close menu //

const closeMenu = () => {

  mobileMenu.style.display = "none";

  if(mobileMenu.classList !== 'active'){
    mobileMenu.classList.toggle('active');
    document.querySelector('.mobileMenuLinks').style.display.transition = "all .4s ease-in-out";
  }
  else {
    mobileMenu.style.display = "none";
    document.querySelector('.mobileMenuLinks').style.display.transition = "all .4s ease-in-out";
  }
}

closeMenu();


// close button event listener //

closeBtn.addEventListener('click', (e) => {

  if(e.target){
    mobileMenu.style.display = "none";
  }

  document.querySelector('.mobileMenuLinks').style.display.transition = "all .4s ease-in-out";

})

// mobile btn event listener // 

mobileMenuBtn.addEventListener('click', (e) => {

  if(e.target){
    mobileMenu.style.height = "101vh";
    mobileMenu.style.display = "block";
    mobileMenu.style.display.backgroundColor = "black";
    document.querySelector('.mobileMenuLinks.active').style.display.color = "black";
    document.querySelector('.mobileMenuLinks.active').style.display.transition = "all .4s ease-in-out";
    document.querySelector('.mobileMenuLinks.active').style.display.position = "fixed";
    document.querySelector('.mobileMenuLinks.active').style.display.width = "100%";
    document.querySelector('.mobileMenuLinks.active').style.display.height = "100%";
    document.querySelector('.mobileMenuLinks.active').style.display.top = "0%";
    document.querySelector('.mobileMenuLinks.active').style.display.left = "0%";
    document.querySelector('.mobileMenuLinks').style.display.right = "0%";
    document.querySelector('.mobileMenuLinks').style.display.bottom = "0%";
  } 

  /*if(e.target){
    mobileMenu.classList.toggle('active')
  } */
  
})