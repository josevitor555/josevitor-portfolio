// Import express
import express from 'express';

// Import axios
import axios from 'axios';

// Import env for enviroment variables
import dotenv from 'dotenv';

// Configure env
dotenv.config();

// Import cors
import cors from 'cors';

// Import connectMongo function
import connectMongo from './connectMongo/connect.js';

// Create app express
const app = express();

// Configure cors for connection from backend to frontend
app.use(cors({
    origin: ['http://localhost:5173'],
}));

// Middleware to parse JSON
app.use(express.json());

// Simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the backend of the project" });
// })

// Connect to MongoDB
app.get("/", async (req, res) => {
  try {
    await connectMongo();
    res.status(200).json({ message: "Connected to MongoDB" });
  } catch (error) {
    res.status(500).json({ message: "Error connecting to MongoDB" });
  }
});

// App port
const port = process.env.PORT || 3000;

// Initialize app
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
