// Select the footer element
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');

    // Create a new paragraph for the date and time
    const dateTimeParagraph = document.createElement('p');
    dateTimeParagraph.id = 'current-date-time';

    // Get the current date and time
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDateTime = now.toLocaleDateString('en-US', options);

    // Set the content of the paragraph
    dateTimeParagraph.textContent = `Last updated: ${formattedDateTime}`;

    // Append the paragraph to the footer
    footer.appendChild(dateTimeParagraph);
});