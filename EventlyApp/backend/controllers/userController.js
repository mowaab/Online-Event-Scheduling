import mongoose from "mongoose";
import User from "../models/User.js";

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

