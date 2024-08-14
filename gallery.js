// JavaScript to handle lightbox functionality

// Get all the gallery images
const galleryImages = document.querySelectorAll('.gallery');

// Loop through each image to add click event listener
galleryImages.forEach((image, index) => {
    image.addEventListener('click', function(event) {
        event.preventDefault();
        openLightbox(index + 1);
    });
});

// Function to open the lightbox
function openLightbox(imageNumber) {
    // Hide all lightboxes
    const lightboxes = document.querySelectorAll('.lightbox');
    lightboxes.forEach(lightbox => {
        lightbox.style.display = 'animation';
    });

    // Show the selected lightbox
    const lightbox = document.getElementById(`img${imageNumber}`);
    if (lightbox) {
        lightbox.style.display = 'flex';
    }
}

// Close lightbox when clicked anywhere
const lightboxes = document.querySelectorAll('.lightbox');
lightboxes.forEach(lightbox => {
    lightbox.addEventListener('click', function() {
        this.style.display = 'none';
    });
});
