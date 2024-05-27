document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const backToTopButton = document.getElementById('backToTop');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeIcon.classList.toggle('fa-moon');
        darkModeIcon.classList.toggle('fa-sun');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
