// Get the button element
const backToTopButton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Smooth scroll to top
backToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});