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
  const scrollLinks = document.querySelectorAll(".nav-link, .h-btn");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        const targetElement = document.querySelector(href);
        const headerHeight = document.querySelector("header").offsetHeight;
        const position = targetElement.getBoundingClientRect().top;
        const offsetPosition = position - headerHeight;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        window.location.href = href;
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
// const viewMoreBtn = document.getElementById("view-more-btn");
// const project3 = document.getElementById("project-3");
// const project4 = document.getElementById("project-4");

// viewMoreBtn.addEventListener("click", () => {
//   if (project3.style.display === "none") {
//     project3.classList.add("animate");
//     project4.classList.add("animate");

//     setTimeout(() => {
//       project3.style.display = "block";
//       project4.style.display = "block";

//       requestAnimationFrame(() => {
//         project3.style.opacity = "1";
//         project3.style.transform = "translateY(0)";
//         project4.style.opacity = "1";
//         project4.style.transform = "translateY(0)";
//       });

//       viewMoreBtn.style.display = "none";
//     }, 100); 
//   }
// });

const viewMoreBtn = document.getElementById("view-more-btn");
const viewLessBtn = document.createElement("button");
viewLessBtn.classList.add("btn", "view-more-btn");
viewLessBtn.textContent = "View Less";

const project3 = document.getElementById("project-3");
const project4 = document.getElementById("project-4");

viewMoreBtn.addEventListener("click", () => {
  if (project3.style.display === "none") {
    project3.classList.add("animate");
    project4.classList.add("animate");

    setTimeout(() => {
      project3.style.display = "block";
      project4.style.display = "block";

      requestAnimationFrame(() => {
        project3.style.opacity = "1";
        project3.style.transform = "translateY(0)";
        project4.style.opacity = "1";
        project4.style.transform = "translateY(0)";
      });

      viewMoreBtn.style.display = "none";
      viewMoreBtn.after(viewLessBtn);
    }, 100);
  }
});

viewLessBtn.addEventListener("click", () => {
  project3.style.opacity = "0";
  project3.style.transform = "translateY(-50px)";
  project4.style.opacity = "0";
  project4.style.transform = "translateY(-50px)";

  setTimeout(() => {
    project3.style.display = "none";
    project4.style.display = "none";
    viewMoreBtn.style.display = "block";
    viewLessBtn.remove();
  }, 500);
});