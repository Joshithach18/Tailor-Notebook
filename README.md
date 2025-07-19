# 🧵 Tailor Notebook - Digital Order Management System

Tailor Notebook is a full-stack web application designed to help local tailoring businesses efficiently manage customer details, body measurements, order tracking, and payments through a simple dashboard.

## ✨ Features

- 👤 Add, view, update, and delete **Customer** details  
- 📏 Manage and record **Measurements** for each customer  
- 🧾 Track **Orders** with statuses like Pending, In Progress, and Completed  
- 💰 Log and review **Payments** for customer orders  
- 📊 Interactive frontend dashboard for seamless user interaction  

## 🖥️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MySQL (configurable via `db.js`)
- **API**: RESTful routes using Express
- **Others**: CORS for frontend-backend communication

## 📂 Folder Structure

├── index.html                # Main frontend dashboard

├── sample.html              # Test frontend for customer API

├── server.js                # Main backend entry point

├── db.js                    # MySQL database connection

├── routes/

│   ├── customers.js         # Customer APIs

│   ├── measurements.js      # Measurement APIs

│   ├── orders.js            # Order APIs

│   └── payment.js           # Payment APIs

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tailor-notebook.git
cd tailor-notebook
```

## 2. Install backend dependencies
``` bash
npm install
```

## 3. Setup MySQL Database
   
Create a database named tailor_notebook and update db.js:
```
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tailor_notebook'
});
```

NOTE: You may also need to create corresponding tables in MySQL if switching from in-memory data to persistent storage.

## 4. Start the Server
``` bash
Copy
Edit
node server.js
```

Server will be available at: http://localhost:5000

## 5. Launch the Dashboard
Open index.html in your browser to use the interface.

## 📌 API Endpoints

All endpoints are prefixed with /api:

GET /api/customers

POST /api/customers

PUT /api/customers/:id

DELETE /api/customers/:id

Similar endpoints for /measurements, /orders, and /payments

## 🛠️ Future Enhancements

Add login/authentication system

Replace in-memory arrays with persistent MySQL storage

Add print and export features for orders

Responsive mobile UI

Dashboard analytics

## 🎓 Project Credits

Developed as part of a Full Stack Bootcamp by Angela Yu with:

5 mini projects including personal site, blog, and API integration

Full CRUD implementation and modular backend routing

## 📄 License

Licensed under the MIT License.
