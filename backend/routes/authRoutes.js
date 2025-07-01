import express from 'express';
import { signup, login } from '../controllers/authController.js';
import protect from '../middleware/authMiddleware.js'; // Import the protect middleware
import User from '../models/User.js'; // Import User model to fetch user details

const router = express.Router();

// User signup route
router.post('/signup', signup);

// User login route
router.post('/login', login);

// Protected route to fetch user profile
router.get('/profile', protect, async (req, res) => {
  try {
    // Get the user ID from the JWT token (attached by 'protect' middleware)
    const user = await User.findById(req.user.id); 
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user details (excluding sensitive data like password)
    res.status(200).json({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user details' });
  }
});

export default router;
