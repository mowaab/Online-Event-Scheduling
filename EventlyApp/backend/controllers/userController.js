import User from "../models/User.js";

const registerUser = async (req, res) => {
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
        const newUser = User.create({username, email, password: hashedPassword});
        res.status(201).json({ message: 'User registered successfully' });
        
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default registerUser;