document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('membersContainer');
    const toggleViewButton = document.getElementById('toggleView');
    let isGridView = true;

    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching members:', error);
            membersContainer.innerHTML = '<p>Failed to load member data. Please try again later.</p>';
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>${member.description}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    }

    toggleViewButton.addEventListener('click', () => {
        isGridView = !isGridView;
        membersContainer.classList.toggle('grid-view', isGridView);
        membersContainer.classList.toggle('list-view', !isGridView);
    });

    fetchMembers();
});