// Import dotenv
import dotenv from "dotenv";
dotenv.config();

// Import bcrypt
import bcrypt from "bcryptjs";

// Import jwt
import jwt from "jsonwebtoken";

// Import User Models
import User from "../models/UserModel.js";

// Register User Route
export const register = async (req, res) => {
    const { name, email, password } = req.body; // Destructure the request body to get name, email, and password

    try {
        // Validate input fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Crypt the password
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        // Create a new user
        const user = new User({ name, email, password: hashedPassword });

        // Save the user to the database
        const savedUser = await user.save();
        console.log('User saved successfully:', savedUser);

        // Generate JWT token with user ID and secret key
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send response with token and user info
        res.status(201).json({
            token,
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Login Router
export const login = async (req, res) => {
    const { email, password } = req.body; // Destructure the request body to get email and password

    try {
        // Found user in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' }); // Check if user exists
        }

        // Compare passwords
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(400).json({ message: 'Invalid credentials.' }); // Check if password is valid
        }

        // Generate JWT token with user ID and secret key
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send response with token and user info
        res.status(200).json({

            // Token to send to the client
            token,

            // Payload to send to the client
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching user' });
    }
};

// Delete Account Router
export const deleteAccount = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log('Attempting to delete user with ID:', userId);
        
        if (!userId) {
            console.error("No user ID in the request");
            return res.status(400).json({ message: "User ID missing" });
        }

        const deleteUser = await User.findByIdAndDelete(userId);
        if (!deleteUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        console.log(`User with ID ${userId} deleted successfully`);
        
        // Return proper JSON response
        res.status(200).json({
            message: "Account deleted successfully",
            success: true,
            deletedUser: {
                id: deleteUser._id,
                name: deleteUser.name,
                email: deleteUser.email
            }
        });
        
    } catch (error) {
        console.error('Delete account error:', error);
        res.status(500).json({
            message: "Error deleting account",
            error: error.message
        });
    }
}
