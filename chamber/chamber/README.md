# Timbuktu Chamber of Commerce

## Overview
The Timbuktu Chamber of Commerce project is designed to provide information about local businesses and community resources. It features a user-friendly interface that allows visitors to view member companies in either a grid or list format.

## Project Structure
```
chamber
├── data
│   └── members.json
├── scripts
│   ├── course.js
│   ├── date.js
│   ├── navigation.js
│   ├── theme.js
│   └── members.js
├── styles
│   └── style.css
├── index.html
└── README.md
```

## Files and Functionality

### data/members.json
This file contains an array of company objects, each with the following fields:
- **name**: The name of the company.
- **address**: The physical address of the company.
- **phone**: The contact phone number.
- **website**: The URL of the company's website.
- **image**: The filename of the company's logo or icon.
- **membershipLevel**: The level of membership in the chamber.
- **additionalInfo**: Any other relevant information about the company.

### scripts/members.js
This script fetches the member data from `members.json` using async/await. It provides functionality to display the member information in both grid and list views, allowing users to toggle between the two layouts.

### scripts/date.js
This script sets the current copyright year and the last modification date in the footer of the `index.html` page, ensuring that the information is always up to date.

### index.html
The main HTML document for the project, which includes the structure for displaying member information and the footer for copyright and modification dates.

### styles/style.css
This file contains the CSS styles for the project, including styles for the grid and list views of the member cards.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Open `index.html` in a web browser to view the project in action.
4. Ensure that the `data/members.json` file is populated with the necessary company data.

## Contribution
Feel free to contribute to the project by adding more companies to the `members.json` file or enhancing the functionality of the JavaScript files.