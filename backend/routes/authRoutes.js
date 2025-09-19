// Import express
import express from "express";

// Import auth controller
import * as authController from "../controllers/authController.js";

// Import VerifyToken
import VerifyToken from "../middlewares/authMiddleware.js";

// Create a new router
const router = express.Router();

// Register User
router.post("/register", authController.register);

// Login User
router.post("/login", authController.login);

// Logout User
router.post("/logout", VerifyToken, authController.deleteAccount);
