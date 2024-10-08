// userRoutes.js
import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import registerUser from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser)

export default router;
