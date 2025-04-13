export function openModal(item) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}">
            <p>${item.description}</p>
            <p><strong>Category:</strong> ${item.category}</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}