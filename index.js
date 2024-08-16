let carSld = document.getElementById("carrusel-slides");
let carSlds = document.querySelector("#carrusel-slides .slide");
let carRight = document.querySelector(".btn-next");
let carLeft = document.querySelector(".btn-prev");
let direction;

carRight.onclick = function () {
  carSld.scrollLeft += 220;  
};

carLeft.onclick = function () {
  carSld.scrollLeft -= 220;
};

