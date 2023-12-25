const backgroundMusic = document.getElementById('background-music');
const images = ['img.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']; // Add more images as needed
let currentImageIndex = 0;

// Calculate the target date for the timer
function getTargetDate() {
    const today = new Date();
    let targetDate = new Date(today.getFullYear(), 11, 25); // December 26th

    if (today.getMonth() > 11 || (today.getMonth() === 11 && today.getDate() > 25)) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    targetDate.setHours(0, 0, 0, 0);
    return targetDate;
}

const targetDate = getTargetDate();
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        showGiftBox();
    } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('timer').textContent = `Time remaining: ${hours}h ${minutes}m ${seconds}s`;
    }
}

function showGiftBox() {
    document.getElementById('timer').style.display = 'none';
    const giftBox = document.getElementById('gift-box');
    giftBox.style.display = 'block';
    giftBox.addEventListener('click', startSlideshow);
}

function startSlideshow() {
    document.getElementById('gift-box').style.display = 'none';
    const slideshowContainer = document.getElementById('slideshow-container');
    slideshowContainer.style.display = 'block';
    backgroundMusic.play();
    changeImage();
}

function changeImage() {
    if (currentImageIndex < images.length) {
        document.getElementById('slideshow-image').src = images[currentImageIndex++];
        setTimeout(changeImage, 3000); // Change image every 3 seconds
    } else {
        endSlideshow();
    }
}

function endSlideshow() {
    document.getElementById('slideshow-container').style.display = 'none';
    document.getElementById('birthday-message').style.display = 'block';
    // Optional: stop the music
}
