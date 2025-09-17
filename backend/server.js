// Import Express
import express from 'express';

// Import env for enviroment variables
import dotenv from 'dotenv';

// Configure env
dotenv.config();

// Create app express
const app = express();

// Route example show hello world
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// App port
const port = process.env.PORT || 3000;

// Initialize app
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
