const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

// Routes
const authRoutes = require('./routes/auth');
const metadataRoutes = require('./routes/metadata');
const linksRoutes = require('./routes/links');
const commentsRoutes = require('./routes/comments');
const adminRoutes = require('./routes/admin');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/metadata', metadataRoutes);
app.use('/api/links', linksRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/admin', adminRoutes);

// Serve frontend pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../frontend/index.html');
});

app.get('/detail', (req, res) => {
    res.sendFile(__dirname + '/../frontend/detail.html');
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/../frontend/search.html');
});

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/../frontend/profile.html');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/../frontend/admin.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;