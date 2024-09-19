// Import required libraries
const express = require('express');
const mongoose = require('mongoose');
const Appointment = require('./models/Appointment');
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

// GET route to fetch all appointments
app.get('/appointments', async(req, res) => {
  try{
    const appointments = await Appointment.find(); // fitch all appointments from MongoDB 
    res.json(appointments); // sends the appointments back as JSON
  } catch (error){
    res.status(500).json({message: error.message}); // Handels errors
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
