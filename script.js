const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.onload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('mousemove', function(e) {
    const dot = document.getElementById('cursor-dot');
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
});