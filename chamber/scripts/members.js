document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.querySelector('.company-spotlights');
    const membersJsonPath = 'chamber/data/members.json';

    async function fetchMembers() {
        try {
            const response = await fetch(membersJsonPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const members = await response.json();
            displaySpotlights(members);
        } catch (error) {
            console.error('Error fetching members data:', error);
            membersContainer.innerHTML = '<p>Failed to load member data. Please try again later.</p>';
        }
    }

    function displaySpotlights(members) {
        // Filter for Gold and Silver members
        const eligibleMembers = members.filter(
            (member) => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
        );

        // Shuffle the eligible members and select up to 3
        const randomMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Generate HTML for the selected members
        membersContainer.innerHTML = `
            <h2>Company Spotlights</h2>
            ${randomMembers
                .map(
                    (member) => `
                <div class="spotlight">
                    <img src="chamber/images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            `
                )
                .join('')}
        `;
    }

    fetchMembers();
});