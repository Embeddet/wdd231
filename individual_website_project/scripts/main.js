import { openModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.querySelector('.items-container');

    // Fetch JSON data
    async function fetchItems() {
        try {
            const response = await fetch('data/items.json');
            if (!response.ok) throw new Error('Failed to fetch data');
            const items = await response.json();

            // Build items dynamically
            items.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'item-card';
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <button class="learn-more" data-index="${index}">Learn More</button>
                `;
                itemsContainer.appendChild(itemElement);
            });

            // Add event listeners to "Learn More" buttons
            document.querySelectorAll('.learn-more').forEach(button => {
                button.addEventListener('click', (e) => {
                    const index = e.target.dataset.index;
                    openModal(items[index]);
                });
            });
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    }

    fetchItems();
});