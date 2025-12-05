# Crypto Tracker

A full-stack cryptocurrency tracking application built with Node.js, Express, MongoDB, and React (Vite).
Users can add coins, set threshold prices, fetch live values using the CoinGecko API, and visualize trends through a simple dashboard.

 # Backend Setup
1. Navigate to backend
cd backend

2. Install dependencies
npm install

3. Create .env
PORT=5000
MONGO_URI=mongodb://localhost:27017/crypto-tracker

4. Start server
npm start

#  Frontend Setup
1. Navigate to frontend
cd frontend

2. Install dependencies
npm install

3. Start development server
npm run dev

# API End Point
Get All Coins

GET /api/coins/

Update Coin

PUT /api/coins/:id

Delete Coin

DELETE /api/coins/:id

Get Live Prices

GET /api/coins/prices
