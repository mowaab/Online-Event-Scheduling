import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken';



export const registerUser = async (req, res) => {
    // checking if the user already exists
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Username, password and email are required' });
    }
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // hashing the password for security
        const hashedPassword = await bcrypt.hash(password, 10);

        // creating a new user
        const user = await User.create({username, email, password: hashedPassword});
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"User does not exist!"})
    }

    const user = await User.findByIdAndDelete({_id: id})

    if(!user)
    {
        return res.status(400).json({error:"User does not exist!"})
    }

    res.status(200).json({user})
};

export const updateUser = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error:"User does not exist!"})
    }

    const user = await User.findByIdAndUpdate({_id : id})

    if(!user)
    {
        return res.status(400).json({error:"User does not exist!"})
    }

    res.status(200).json({user})

};

// Login User
export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Create a JWT token (optional, can be used for authentication in future requests)
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with success and the token (you can also send user data if needed)
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};