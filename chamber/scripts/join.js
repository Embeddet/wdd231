document.addEventListener('DOMContentLoaded', () => {
    // Set the timestamp
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toISOString();

    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    document.querySelectorAll('.card a').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = link.getAttribute('href').substring(1);
            document.getElementById(modalId).style.display = 'block';
        });
    });
});