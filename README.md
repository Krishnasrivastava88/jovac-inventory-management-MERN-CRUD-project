📦 Inventory Management System (IMS)
A professional MERN Stack application designed for seamless product management. This project features a modern, responsive UI and a robust backend for full CRUD operations.

🛠️ Tech Stack
Frontend: React.js, Bootstrap 5, FontAwesome

Backend: Node.js, Express.js

Database: MongoDB Atlas

Routing: React Router DOM

🚀 How to Run the App
1. Prerequisites
Ensure you have Node.js and MongoDB Compass installed on your machine.

2. Database Setup
Open MongoDB Compass.

Create a new database named IMS.

Create a collection within it named products.

3. Start the Backend
Open a terminal in the root directory:

Bash
cd Backend
npm install
npm run server
The server will start on http://localhost:3001.

4. Start the Frontend
Open a second terminal split:

Bash
cd Frontend/Inventory-Management-System
npm install
npm start
The client will open on http://localhost:3000.

📸 Application Preview
1. Dashboard (Home)
The entry point featuring quick navigation and a professional welcome hero.

2. Inventory View (GET)
A clean, high-density table displaying all products with action icons for editing and deleting.

3. Add Product (POST)
A modern card-based form with validation for Product Name, Price, and 12-digit Barcodes.

4. Edit Product (PUT)
Real-time data fetching allows for seamless updates to existing inventory items.

5. Remove Product (DELETE)
Instant deletion with database synchronization.

📂 Project Structure
Plaintext
├── Backend
│   ├── Models      # Mongoose Schema
│   ├── Routes      # API Endpoints
│   └── index.js    # Server Entry Point
└── Frontend
    └── src
        ├── components # UI Components (Navbar, Home, etc.)
        ├── App.js     # Logic & Routing
        └── App.css    # Custom Indigo/Slate Styling
Developed with ❤️ by Krishna
