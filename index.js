/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

// $(document).ready(function () {
//   $("#exp-1").click(function () {
//     $(".expandable-1").toggle();
//   });
// });

function exp1Click() {
  document.getElementById("expandable-1").classList.toggle("expandable-1");
  if (document.getElementById("exp-1-btn").innerHTML == "Show More") {
    document.getElementById("exp-1-btn").innerHTML = "Show Less";
  } else {
    document.getElementById("exp-1-btn").innerHTML = "Show More";
  }
}

function exp2Click() {
  document.getElementById("expandable-2").classList.toggle("expandable-2");
  if (document.getElementById("exp-2-btn").innerHTML == "Show More") {
    document.getElementById("exp-2-btn").innerHTML = "Show Less";
  } else {
    document.getElementById("exp-2-btn").innerHTML = "Show More";
  }
}

//~~~~~~~~~~~~~
var slideIndex = 1;
showSlides(slideIndex, slideType, dotType);

// Next/previous controls
function plusSlides(n, slideType, dotType) {
  showSlides((slideIndex += n), slideType, dotType);
}

// Thumbnail image controls
function currentSlide(n, slideType, dotType) {
  showSlides((slideIndex = n), slideType, dotType);
}

function showSlides(n, slideType, dotType) {
  var i;
  var slides = document.getElementsByClassName(slideType);
  var dots = document.getElementsByClassName(slideType);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function loadAll() {
  var namelist = [
    "winter.png",
    "Hello Dribbble ET.jpg",
    "Hourglass.png",
    "INSL@2x-100.jpg",
    "Moon Silhouette.png",
    "z1.png",
    "Woman 2.jpg",
    "bikewallthingy@2x-100.jpg",
    "jpj.jpg",
  ];

  var port = document.getElementById("portfolioSec");

  for (var i = 0; i < namelist.length; i++) {
    var wrapper = document.createElement("div");
    var src = "./images/portfolio/" + namelist[i];
    wrapper.className = "gallery-item";
    wrapper.innerHTML = "<img class='gallery-image' src='" + src + "' />";
    port.appendChild(wrapper);
  }
}
