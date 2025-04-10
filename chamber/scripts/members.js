document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('membersContainer');
    const membersJsonPath = 'data/members.json'; // Adjust the path if necessary

    async function fetchMembers() {
        try {
            const response = await fetch(membersJsonPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching members data:', error);
            membersContainer.innerHTML = '<p>Failed to load member data. Please try again later.</p>';
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = members
            .map(
                (member) => `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `
            )
            .join('');
    }

    fetchMembers();
});