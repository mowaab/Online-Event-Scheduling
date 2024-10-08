// userRoutes.js
import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import {registerUser, deleteUser, updateUser} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;
