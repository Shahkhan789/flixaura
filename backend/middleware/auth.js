// Authentication Middleware
const jwt = require('jsonwebtoken');

// Mock user database (in a real app, this would be a real database)
const users = [
    { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { id: 2, username: 'user1', email: 'user1@example.com', password: 'user123', role: 'user' }
];

// Authentication middleware
function authenticateToken(req, res, next) {
    // Get token from header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }
    
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        
        // Add user to request object
        req.user = user;
        next();
    });
}

// Admin authorization middleware
function authorizeAdmin(req, res, next) {
    // First check if user is authenticated
    if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
    }
    
    // Check if user is admin
    const user = users.find(u => u.id === req.user.id);
    if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
    }
    
    next();
}

module.exports = {
    authenticateToken,
    authorizeAdmin
};