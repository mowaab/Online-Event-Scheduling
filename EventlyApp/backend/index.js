import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db.js';
import UserRoutes from './routes/UserRoutes.js';
import AppoiRoutes from './routes/AppoiRoutes.js';



dotenv.config()
const app = express();


// Middleware
app.use(express.json());
app.use('/api/users',UserRoutes);
app.use('/api/appointments',AppoiRoutes);


// Connect to MongoDB
connectDB();



app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port`, process.env.PORT);
});
