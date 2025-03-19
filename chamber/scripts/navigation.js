document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navList.classList.contains('active'));
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-nav')) {
            navList.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    document.querySelectorAll('.nav-list a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});