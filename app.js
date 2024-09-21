// Select elements for lightbox
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var closeLightbox = document.querySelector('.close');

// Array of image sources
var images = [
    "img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg",
    "img/5.jpeg", "img/6.jpeg", "img/7.jpeg", "img/8.jpeg",
    "img/9.jpeg", "img/10.jpeg", "img/11.jpeg", "img/12.jpeg",
    "img/13.jpeg", "img/14.jpeg", "img/15.jpeg", "img/16.jpeg"
];

// Variable to track the current image indevar currentIndex = 0;

// Function to display the clicked image in the lightbox
function changeImage(index) {
    // Update current index
    currentIndex = index;

    // Set the source of the lightbox image to the clicked thumbnail
    lightboxImg.src = images[currentIndex];

    // Display the lightbox
    lightbox.style.display = 'block';
    lightboxImg.style.height = '50vh';
    lightboxImg.style.marginTop = '150px';
}

// Move to the next or previous slide
function moveSlide(direction) {
    // Calculate new index
    currentIndex += direction;

    // If the new index is out of bounds, wrap it around
    if (currentIndex < 0) {
        currentIndex = images.length - 1;  // Go to last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0;  // Go to first image
    }

    // Change the lightbox image to the new one
    lightboxImg.src = images[currentIndex];
}

// Close the lightbox when the user clicks the close button
closeLightbox.onclick = function () {
    lightbox.style.display = 'none';
}

// Optional: Close the lightbox when clicking outside the image
lightbox.onclick = function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
}
