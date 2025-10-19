// Authentication Controller
const User = require('../models/User');

// Mock user database (in a real app, this would be a real database)
const users = [
    new User(1, 'admin', 'admin@example.com', 'admin123', 'admin'),
    new User(2, 'user1', 'user1@example.com', 'user123', 'user')
];

class AuthController {
    // User signup
    static async signup(req, res) {
        try {
            const { username, email, password } = req.body;
            
            // Check if user already exists
            const existingUser = users.find(u => u.email === email || u.username === username);
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            
            // Create new user
            const newUser = new User(users.length + 1, username, email, password);
            users.push(newUser);
            
            res.status(201).json({ 
                message: 'User created successfully', 
                user: newUser.toJSON() 
            });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }
    
    // User login
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            
            // Find user
            const user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            
            res.json({ 
                message: 'Login successful', 
                user: user.toJSON() 
            });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }
    
    // Get user profile
    static async getProfile(req, res) {
        try {
            const userId = parseInt(req.params.userId);
            const user = users.find(u => u.id === userId);
            
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            res.json({ user: user.toJSON() });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }
    
    // Update user profile
    static async updateProfile(req, res) {
        try {
            const userId = parseInt(req.params.userId);
            const userIndex = users.findIndex(u => u.id === userId);
            
            if (userIndex === -1) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            // Update user data
            Object.assign(users[userIndex], req.body);
            
            res.json({ 
                message: 'Profile updated successfully', 
                user: users[userIndex].toJSON() 
            });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = AuthController;