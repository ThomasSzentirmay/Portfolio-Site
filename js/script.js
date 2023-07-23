// Header style change when user scrolls down
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Smooth scroll to sections functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navlist a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      if (targetSection) {
        const targetOffset = targetSection.getBoundingClientRect().top;
        const headerOffset = document.querySelector("header").offsetHeight;
        const scrollOffset = targetOffset + window.scrollY - headerOffset;
        window.scrollTo({
          top: scrollOffset,
          behavior: "smooth"
        });
      }
    });
  });
});

// Back to Top Button Functionality
const backToTopButton = document.querySelector(".back-to-top-btn");

backToTopButton.addEventListener("click", () => {
  smoothScrollToTop();
});

function smoothScrollToTop() {
  const startPosition = window.pageYOffset;
  const targetPosition = 0;
  const distance = targetPosition - startPosition;
  const duration = 250;
  let startTimestamp = null;

  function scrollAnimation(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;
    const scrollStep = Math.max(progress / duration, 0) * distance + startPosition;
    window.scrollTo(0, scrollStep);
    
    if (progress < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

const footerContent = document.querySelector(".footer-content");

window.addEventListener("load", () => {
  footerContent.style.opacity = "1";
  footerContent.style.transform = "translateY(0)";
});