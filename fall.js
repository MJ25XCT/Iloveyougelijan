const imagesLeft = document.querySelectorAll(".falling-image-left");
const imagesRight = document.querySelectorAll(".falling-image-right");
const animationDuration = 5000; // 5 seconds

function resetAnimation(image) {
    image.style.animation = "none";
    image.offsetHeight; // Trigger a reflow to reset the animation
    image.style.animation = `fadeInFall ${animationDuration / 1000}s ease-in-out forwards`;
}

function startAnimation(images) {
    images.forEach((image, index) => {
        setTimeout(() => {
            resetAnimation(image);
        }, index * 3000); // 3 seconds delay between each image
    });

    setTimeout(() => {
        startAnimation(images);
    }, images.length * 3000); // Repeat after all images have animated
}

// Start the animations initially
startAnimation(imagesLeft);
startAnimation(imagesRight);