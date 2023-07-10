const InterSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            InterSectionObserver.unobserve(entry.target);
        }
    });
})

const toAnimateOnSeen = document.querySelectorAll('[data-animate-viewport]');
console.log(toAnimateOnSeen);
toAnimateOnSeen.forEach(element => {
    InterSectionObserver.observe(element);
})