const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Signup endpoint
router.post('/signup', AuthController.signup);

// Login endpoint
router.post('/login', AuthController.login);

// Get user profile
router.get('/profile/:userId', AuthController.getProfile);

// Update user profile
router.put('/profile/:userId', AuthController.updateProfile);

module.exports = router;