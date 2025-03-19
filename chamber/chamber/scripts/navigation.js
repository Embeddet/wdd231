// This file contains JavaScript code for navigation functionality, including toggling between grid and list views for displaying member information.

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.filter-btn');
    const coursesContainer = document.getElementById('coursesContainer');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            displayMembers(filter);
        });
    });

    async function displayMembers(filter) {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            const filteredMembers = filter === 'all' ? members : members.filter(member => member.membershipLevel === filter);
            renderMembers(filteredMembers);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    function renderMembers(members) {
        coursesContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            coursesContainer.appendChild(memberCard);
        });
    }
});