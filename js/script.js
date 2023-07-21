// Loading things into page smoothly with delay
const sr = ScrollReveal({
	distance: '35px',
	duration: 2400,
	reset: true
});

sr.reveal('.logo', { delay: 310, origin: 'left' });
sr.reveal('.navlist', { delay: 310, origin: 'top' });
sr.reveal('.top-btnn', { delay: 310, origin: 'right' });

sr.reveal('.main-content h4', { delay: 310, origin: 'top' });
sr.reveal('.main-content h1', { delay: 310, origin: 'left' });
sr.reveal('.main-content p', { delay: 310, origin: 'right' });
sr.reveal('.social', { delay: 310, origin: 'left' });
sr.reveal('.main-btnn', { delay: 310, origin: 'top' });

sr.reveal('.bottom', { delay: 510, origin: 'bottom' });

// Reveal the headers in .about, .services, .portfolio, and .contact sections
sr.reveal('.about h2', { delay: 250, origin: 'left' });
sr.reveal('.services h2', { delay: 250, origin: 'top' });
sr.reveal('.portfolio h2', { delay: 250, origin: 'right' });
sr.reveal('.contact h2', { delay: 250, origin: 'top' });


// Smooth scroll function
function smoothScroll(target, duration) {
	var targetElement = document.querySelector(target);
	var targetPosition = targetElement.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, targetPosition, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

// Smooth scroll for navigation links
var navLinks = document.querySelectorAll('.navlist a');

navLinks.forEach(function (link) {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		var target = link.getAttribute('href');
		smoothScroll(target, 1000);
	});
});

// Smooth scroll for "Contact me" button
var contactBtn = document.querySelector('.top-btnn a');

contactBtn.addEventListener('click', function (event) {
	event.preventDefault();
	var target = contactBtn.getAttribute('href');
	smoothScroll(target, 1000);
});