Crypto Tracker

A full-stack cryptocurrency tracking application built with Node.js, Express, MongoDB, and React (Vite).
Users can add coins, set threshold prices, fetch live values using the CoinGecko API, and visualize trends through a simple dashboard.


📂 Project Structure
CRYPT0-TRACKER/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── cron/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── api.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js

⚙️ Backend Setup
1. Navigate to backend
cd backend

2. Install dependencies
npm install

3. Create .env
PORT=5000
MONGO_URI=mongodb://localhost:27017/cryptotracker

4. Start server
npm start

🖥️ Frontend Setup
1. Navigate to frontend
cd frontend

2. Install dependencies
npm install

3. Start development server
npm run dev
