// File: chamber/scripts/members.js

const membersContainer = document.getElementById('membersContainer');
const toggleViewBtn = document.getElementById('toggleView');
let isGridView = true;

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = isGridView ? 'member-card grid' : 'member-card list';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        membersContainer.appendChild(memberCard);
    });
}

toggleViewBtn.addEventListener('click', () => {
    isGridView = !isGridView;
    fetchMembers();
});

fetchMembers();