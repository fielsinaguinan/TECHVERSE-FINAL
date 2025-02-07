document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    function showSlides() {
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Increment slide index
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Show the current slide
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add("fade");

        // Repeat every 3 seconds
        setTimeout(showSlides, 3000);
    }

    showSlides();
});
