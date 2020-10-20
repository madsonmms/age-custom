const slideShowImages = document.querySelectorAll('.slide-show-image')


const nextImageDelay = 3000
let currentImageCounter = 0

for(currentImageCounter in slideShowImages) {
    slideShowImages[currentImageCounter].style.display = "none"
}
    



// setInterval(nextImage, nextImageDelay)

// function nextImage() {
//     slideShowImages[currentImageCounter].style.display = "none"
// }