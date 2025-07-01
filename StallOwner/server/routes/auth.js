// /routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming your user model is in /models/User.js

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user in DB
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(400).send('Invalid credentials');
  }

  // Check role of the user
  if (user.role === 'stallOwner') {
    return res.status(200).json({
      message: 'Login successful',
      redirectTo: 'http://localhost:5173/',  // Redirect to stallOwner dashboard
      userData: user
    });
  } else {
    return res.status(200).json({
      message: 'Login successful',
      redirectTo: 'http://localhost:5174/',  // Redirect to general user dashboard
      userData: user
    });
  }
});

module.exports = router;
