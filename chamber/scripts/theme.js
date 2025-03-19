document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌓';
    document.body.prepend(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-theme');
        localStorage.setItem('theme', 
            document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark-theme');
    }
});