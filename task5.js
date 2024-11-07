let images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png'
];
let currentIndex = 0;
let intervalId = null;

function startSlideshow() {
    stopSlideshow();

    const imageElement = document.getElementById("slideshow-image");
    const interval = parseInt(document.getElementById("interval").value, 10);
    const loop = document.getElementById("loop").checked;

    updateImageSize();

    intervalId = setInterval(() => {
        imageElement.src = images[currentIndex];
        currentIndex++;

        if (currentIndex >= images.length) {
            if (loop) {
                currentIndex = 0;
            } else {
                stopSlideshow();
            }
        }
    }, interval);
}


function stopSlideshow() {
    clearInterval(intervalId);
    intervalId = null;
}

function updateImageSize() {
    const imageElement = document.getElementById("slideshow-image");
    const width = document.getElementById("imageWidth").value;
    const height = document.getElementById("imageHeight").value;
    imageElement.style.width = `${width}px`;
    imageElement.style.height = `${height}px`;
}