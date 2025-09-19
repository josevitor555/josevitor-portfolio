// Import mongoose
import mongoose from "mongoose";

// Create a new schema for the user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String, // This field is a string
        required: true, // This field is required
        unique: true, // This field must be unique
    },
    password: {
        type: String, // This field is a string
        required: true, // This field is required
        minlength: 8, // This field must be at least 8 characters long
    },

}, {
    collection: 'auth_user' // Explicitly specify the collection name
});

// Create a new model for the user
const User = mongoose.model("User", userSchema); // User model with explicit collection name 'auth_user'

// Export the User model
export default User;