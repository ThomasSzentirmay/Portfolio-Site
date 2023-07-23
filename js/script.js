window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

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