document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let currentActive = document.querySelector('.content-section.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        const newActiveSection = document.querySelector(this.getAttribute('href'));
        newActiveSection.classList.add('active');
    });
});
