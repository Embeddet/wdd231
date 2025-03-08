// Wait for the DOM to load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // Footer dynamic content
  const footerInfo = document.getElementById("footer-info");
  const lastModified = document.getElementById("lastModified");
  const currentYear = new Date().getFullYear();
  footerInfo.textContent = `© ${currentYear} Your Name, Your State/Country`;
  lastModified.textContent = `Last Modified: ${document.lastModified}`;

  // Responsive navigation menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Course List Array
  const courses = [
    { name: "HTML & CSS", credits: 3, department: "WDD", completed: true },
    { name: "JavaScript Basics", credits: 3, department: "WDD", completed: true },
    { name: "Advanced JavaScript", credits: 4, department: "WDD", completed: false },
    { name: "Introduction to Python", credits: 3, department: "CSE", completed: true },
    { name: "Data Structures", credits: 4, department: "CSE", completed: false },
    { name: "Algorithms", credits: 4, department: "CSE", completed: false },
    { name: "Web Design", credits: 3, department: "WDD", completed: true }
  ];

  const coursesContainer = document.getElementById("courses-container");
  const totalCreditsElem = document.getElementById("total-credits");

  function displayCourses(filter) {
    coursesContainer.innerHTML = "";
    let filteredCourses = courses;
    if (filter === "WDD") {
      filteredCourses = courses.filter(course => course.department === "WDD");
    } else if (filter === "CSE") {
      filteredCourses = courses.filter(course => course.department === "CSE");
    }
    
    // Create course cards
    filteredCourses.forEach(course => {
      const card = document.createElement("div");
      card.classList.add("course-card");
      if (course.completed) {\n        card.classList.add("completed");\n      }\n      card.innerHTML = `<h3>${course.name}</h3>\n                        <p>Credits: ${course.credits}</p>\n                        <p>Department: ${course.department}</p>`;\n      coursesContainer.appendChild(card);\n    });\n    \n    // Calculate total credits using reduce\n    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);\n    totalCreditsElem.textContent = `Total Credits: ${totalCredits}`;\n  }\n\n  // Filter buttons event listeners\n  document.getElementById(\"btn-all\").addEventListener(\"click\", () => displayCourses(\"ALL\"));\n  document.getElementById(\"btn-wdd\").addEventListener(\"click\", () => displayCourses(\"WDD\"));\n  document.getElementById(\"btn-cse\").addEventListener(\"click\", () => displayCourses(\"CSE\"));\n\n  // Initially display all courses\n  displayCourses(\"ALL\");\n});\n```