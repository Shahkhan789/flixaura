const express = require('express');
const router = express.Router();

// Mock admin data (in a real app, this would come from a database)
const adminData = {
    metrics: {
        dailyNewUsers: 42,
        activeUsers: 1248,
        viewsPerTitle: {
            "Inception": 1250,
            "The Dark Knight": 2100,
            "Stranger Things": 3400
        },
        commentsPerTitle: {
            "Inception": 24,
            "The Dark Knight": 18,
            "Stranger Things": 32
        },
        topRatings: [
            { title: "The Dark Knight", rating: 9.0 },
            { title: "Inception", rating: 8.4 },
            { title: "Stranger Things", rating: 8.7 }
        ],
        deviceBreakdown: {
            mobile: 65,
            desktop: 35
        }
    },
    users: [
        { id: 1, username: "admin", email: "admin@example.com", role: "admin", status: "active" },
        { id: 2, username: "user1", email: "user1@example.com", role: "user", status: "active" },
        { id: 3, username: "user2", email: "user2@example.com", role: "user", status: "banned" }
    ]
};

// Get admin metrics
router.get('/metrics', (req, res) => {
    try {
        // In a real app, this would fetch data from the database
        res.json({ metrics: adminData.metrics });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get users list
router.get('/users', (req, res) => {
    try {
        // In a real app, this would fetch data from the database
        res.json({ users: adminData.users });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Ban/unban a user
router.put('/user/:userId/ban', (req, res) => {
    try {
        const { userId } = req.params;
        const id = parseInt(userId);
        
        // Find user
        const user = adminData.users.find(u => u.id === id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Toggle ban status
        user.status = user.status === 'active' ? 'banned' : 'active';
        
        res.json({ 
            message: `User ${user.status === 'banned' ? 'banned' : 'unbanned'} successfully`,
            user
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Edit user role
router.put('/user/:userId/role', (req, res) => {
    try {
        const { userId } = req.params;
        const { role } = req.body;
        const id = parseInt(userId);
        
        // Find user
        const user = adminData.users.find(u => u.id === id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Update role
        user.role = role;
        
        res.json({ 
            message: 'User role updated successfully',
            user
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Export users list (CSV)
router.get('/users/export', (req, res) => {
    try {
        // In a real app, this would generate a CSV file
        res.json({ 
            message: 'Users data exported successfully',
            users: adminData.users
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;