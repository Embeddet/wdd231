// This file sets the current copyright year and the last modification date in the footer of the index.html page.

document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("currentYear");
    const lastModifiedElement = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();

    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
});