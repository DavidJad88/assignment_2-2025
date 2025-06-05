# Pharmaceutical Inventory Manager

A class-based Pharmacy Inventory Management System built with JavaScript, HTML, and CSS.

## Overview

This project is an individual assignment for the course **Frontend Development (FFU1200)**, Semester 2. The goal is to practice Object-Oriented Programming (OOP) fundamentals in JavaScript by developing a responsive and user-friendly pharmacy inventory management system.

**Live Demo:** [medicinemanager2025.netlify.app](https://medicinemanager2025.netlify.app/)  
**GitHub Repository:** [github.com/DavidJad88/assignment_2-2025](https://github.com/DavidJad88/assignment_2-2025)

---

## Features

- **Add Medicines:** Enter new medicines with details such as name, manufacturer, expiration date, quantity, symptoms treated, and administration method.
- **Edit Medicines:** Update existing medicine records with a user-friendly modal form.
- **Delete Medicines:** Remove medicines from the inventory with confirmation.
- **Data Persistence:** All data is stored in the browser's Local Storage, ensuring persistence across page reloads.
- **Responsive UI:** The interface adapts to different screen sizes for usability on desktop and mobile devices.
- **Form Validation:** Ensures all required fields are filled, dates are valid, and quantities are positive before submission.
- **Feedback:** Users receive clear feedback for validation errors and actions.

---

## Object-Oriented Approach

The application is structured using ES6 classes and inheritance:

- **BaseMedicine:** The parent class containing shared properties (ID, name, manufacturer, expiration date, quantity, symptoms, administration method).
- **IngestionMedicine, InjectionMedicine, TopicalMedicine:** Subclasses extending `BaseMedicine` for specific administration types, each with their own unique properties.
- **MedicineManager:** Handles CRUD operations and data storage/retrieval from Local Storage.
- **Ui:** Manages all DOM interactions, rendering, and modal logic.
- **Validation:** Centralized form validation logic.

---

## Data Model

Each medicine record includes:

- **Product Name**
- **Product ID** (unique, auto-generated)
- **Manufacturer**
- **Expiration Date** (stored in ISO 8601 format)
- **Quantity** (number of packages)
- **Symptoms Treated**
- **Administration Method** (ingestion, injection, topical)
- **Additional Properties** (e.g., pills per packet, ml per container, depending on administration method)

---

## User Interface

- **Structured Layout:** Data is displayed in a table-like list with clear separation of medicine details.
- **Modals:** For adding, editing, and confirming deletion of medicines.
- **Responsive Design:** Uses CSS Flexbox and media queries for adaptability.
- **Accessible Controls:** Buttons and forms are clearly labeled and provide feedback.

---

## Validation & Error Handling

- All fields are required.
- Expiration date must not be in the past.
- Quantity must be a positive number.
- Only the first validation error is shown to the user for clarity.
- Users are prompted for confirmation before deleting a record.

---

## Technical Details

- **Technologies:** HTML, CSS, JavaScript (ES6+)
- **Build Tool:** [Vite](https://vitejs.dev/) for development and build.
- **UUID Generation:** Uses `uuidv4` for unique medicine IDs.
- **No external frameworks** (React, Vue, etc.) are used, as per assignment requirements.

---

## Deployment

- **Netlify:** [https://medicinemanager2025.netlify.app/](https://medicinemanager2025.netlify.app/)
- **GitHub:** [https://github.com/DavidJad88/assignment_2-2025](https://github.com/DavidJad88/assignment_2-2025)

---

## License & Credits

This project is for educational purposes as part of Kristiania University College's curriculum.

---
