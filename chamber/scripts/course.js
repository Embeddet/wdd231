
try {
    // All course.js code here
} catch (error) {
    console.error('Course script error:', error);
}

// scripts/navigation.js
try {
    // Navigation code
} catch (error) {
    console.error('Navigation error:', error);
}

document.addEventListener('DOMContentLoaded', () => {
    // Add the full courses array from previous answers
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            // ... rest of course object
        },
        // ... other course objects
    ];

    // Mark completed courses (update with your actual completed courses)
    courses[1].completed = true;
    courses[3].completed = true;

    // DOM elements
    const container = document.getElementById('coursesContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function updateProgress() {
        const completed = courses.filter(c => c.completed).length;
        const total = courses.length;
        const progressFill = document.querySelector('.progress-fill');
        
        if (progressFill) {
            progressFill.style.width = `calc(${completed}/${total}*100%)`;
            const progressText = progressFill.querySelector('span');
            if (progressText) {
                progressText.textContent = `${completed}/${total} Courses Completed`;
            }
        }
    }

    function renderCourses(filter = 'all') {
        container.innerHTML = '';
        const filtered = courses.filter(course => 
            filter === 'all' ? true : course.subject === filter
        );
        
        filtered.forEach(course => {
            const card = document.createElement('div');
            card.className = `course-card ${course.completed ? 'completed' : ''}`;
            card.innerHTML = `
                <h3>${course.subject} ${course.number}</h3>
                <h4>${course.title}</h4>
                <p>Credits: ${course.credits}</p>
                <p>${course.description}</p>
                <div class="tech-stack">
                    ${course.technology.map(t => `<span>${t}</span>`).join(' ')}
                </div>
            `;
            container.appendChild(card);
        });

        updateProgress(); // Update progress after each render
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderCourses(button.dataset.filter);
        });
    });

    // Initial setup
    renderCourses();
    updateProgress();
});