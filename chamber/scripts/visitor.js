document.addEventListener('DOMContentLoaded', () => {
    const visitorMessage = document.querySelector('.visitor-message');
    const discoverGrid = document.querySelector('.discover-grid');

    // Visitor Message
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (lastVisit) {
        const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitorMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitorMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    } else {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', currentVisit);

    // Load Discover Cards
    fetch('data/discover.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.gridArea = `card${index + 1}`;
                card.innerHTML = `
                    <figure>
                        <img src="${item.image}" alt="${item.title}">
                    </figure>
                    <h2>${item.title}</h2>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button>Learn More</button>
                `;
                discoverGrid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading discover data:', error));
});