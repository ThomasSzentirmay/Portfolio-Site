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
