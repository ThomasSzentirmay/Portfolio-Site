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
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      if (targetSection) {
        const targetOffset = targetSection.getBoundingClientRect().top;
        const headerOffset = document.querySelector("header").offsetHeight;
        const scrollOffset = targetOffset + window.scrollY - headerOffset;
        window.scrollTo({
          top: scrollOffset,
          behavior: "smooth",
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
    const scrollStep =
      Math.max(progress / duration, 0) * distance + startPosition;
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

// Active nav links
const navLinks = document.querySelectorAll('.nav-link');

function removeActiveClass() {
  navLinks.forEach((link) => link.classList.remove('active'));
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    removeActiveClass();
    link.classList.add('active');
  });
});

// View more projects btn functionality
const viewMoreBtn = document.getElementById("view-more-btn");
const project4 = document.getElementById("project-4");

viewMoreBtn.addEventListener("click", () => {
  project4.style.display = "block";
  viewMoreBtn.style.display = "none";
});