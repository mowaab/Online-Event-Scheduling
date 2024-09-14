// Import required libraries
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection using the URI from .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Simple route to check if the API is working
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
