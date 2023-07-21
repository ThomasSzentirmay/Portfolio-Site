const sr = ScrollReveal({
	distance: '35px',
	duration: 2400,
	reset: true
});

sr.reveal('.logo', { delay: 210, origin: 'left' });
sr.reveal('.navlist', { delay: 310, origin: 'top' });
sr.reveal('.top-btnn', { delay: 410, origin: 'right' });

sr.reveal('.main-content h4', { delay: 510, origin: 'top' });
sr.reveal('.main-content h1', { delay: 610, origin: 'left' });
sr.reveal('.main-content p', { delay: 710, origin: 'right' });
sr.reveal('.social', { delay: 810, origin: 'left' });
sr.reveal('.main-btnn', { delay: 910, origin: 'top' });

sr.reveal('.bottom', { delay: 1010, origin: 'bottom' });

// Reveal the headers in .about, .services, .portfolio, and .contact sections
sr.reveal('.about h2', { delay: 510, origin: 'left' });
sr.reveal('.services h2', { delay: 510, origin: 'top' });
sr.reveal('.portfolio h2', { delay: 510, origin: 'right' });
sr.reveal('.contact h2', { delay: 510, origin: 'top' });
