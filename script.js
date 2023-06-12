// Slideshow Image URLs
var imageUrls = ["images/im1.jpeg", "images/im2.jpeg", "images/im3.jpeg"];

var currentIndex = 0;
var slideshowImg = document.getElementById("slideshow-img");

function changeSlide() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    slideshowImg.src = imageUrls[currentIndex];
}

setInterval(changeSlide, 5000);
